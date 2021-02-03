 const settings = {
  dots: !true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 345,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    },
  ]
}

export default settings
