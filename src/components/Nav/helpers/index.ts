import { Router } from 'next/router'

export const initialMenu = [
  {
    name: 'trending',
    slug: 'trending'
  },
  {
    name: 'this year',
    slug: 'this_year'
  },
  {
    name: 'middle school',
    slug: 'middle_school'
  },
  {
    name: 'samurai',
    slug: 'samurai'
  }
]

export function routerChanging(
  router,
  setMenu: Function,
  setActiveMoreAnimes: Function,
  setSearch: Function
) {
  const handleRouteChange = (url: string, { shallow }) => {
    if (url == '/' || url == '') {
      setMenu(initialMenu)
      setSearch('')
      setActiveMoreAnimes(false)
    } else if (url.includes('anime/')) {
      setMenu(initialMenu.filter((item, index) => index < 2))
      setActiveMoreAnimes(false)
      setSearch('')
    } else if((url.includes('animes'))) {
      setMenu([])
      setActiveMoreAnimes(true)
    }
    else{
      setActiveMoreAnimes(false)
    }
  }
  router.events.on('routeChangeStart', handleRouteChange)
  return () => {
    router.events.off('routeChangeStart', handleRouteChange)
  }
}

export function hasScrolled(setTransparent: Function): void {
  const onScroll = e => {
    if (window.scrollY > 0) setTransparent(false)
    else setTransparent(true)
  }
  window.addEventListener('scroll', onScroll)
}
