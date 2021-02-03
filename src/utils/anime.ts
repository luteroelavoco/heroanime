export function Abbreviate(description: string, limit = 20) {
  var desc = description.split(' ');
  var rst: string = ''

  for (var i = 0; i < desc.length; i++) {
    if (rst.length > limit-1) {
      rst += ' ...'
      break
    }
    rst += ' '+desc[i]
  }
  return rst
}

export function getRating(epis: any){
  if(epis)
   return Math.round((epis/10 + Number.EPSILON) * 10) / 10
  return "0.0";
}

export function getEpisodes(epis: any){
  if(epis)
   return epis +" episodes"
  return "no episodes";
}