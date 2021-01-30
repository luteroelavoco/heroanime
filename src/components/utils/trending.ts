export var settingsListTrending = {
  dots: !true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
}

export function Abbreviate(description: string) {
  const limit = 15
   var desc = description.split(' ');
   var rst: string = ''

   for (var i = 0; i < desc.length; i++) {
     rst += ' '+desc[i]
     if (i == limit) {
       rst += ' ...'
       break
     }
   }
   return rst
 }


