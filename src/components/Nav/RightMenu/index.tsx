import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import './styles.less'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { FaSearch, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useSearch } from '../../../context/search'
const onSearch = value => console.log(value)

function RightMenu() {
  const router = useRouter()
  const { search, setSearch } = useSearch()
  const [canGoBack, setcanGoBack] = useState<any>(false)

  useEffect(() => {
    if (search.length > 0 && !canGoBack) {
      router.push('/animes?q=' + search)
    }
  }, [search])

  useEffect(() => {
    if (canGoBack == '') {
      router.push('/')
    }
  }, [canGoBack])
  const onChange = e => {
    setSearch(e.target.value)
    setcanGoBack(e.target.value)
  }
  return (
    <div className="right-menu">
      <Input
        className="input"
        value={search}
        placeholder="search here your anime"
        prefix={<SearchOutlined />}
        onChange={onChange}
      />
      <div className="right-menu-social">
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>
  )
}
export default RightMenu
