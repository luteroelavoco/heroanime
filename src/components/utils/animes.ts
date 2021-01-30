export var settingsListAnime = {
  className: 'slider variable-width',
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  speed: 400,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        className: 'center',
        centerMode: !true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      }
    }
  ]
}



