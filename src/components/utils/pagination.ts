
export function getPagesNumber(count: number, limit: number): Array<number> {
  let calcpages = Math.ceil(count / limit)
  let pg = []
  for(let i = 1; i <= calcpages; i++)
    pg.push(i)
  return pg
}

export function canShow(index: number, start: number, pagelimits: number): boolean {
  return index >= start && index < start + pagelimits;
}

export function canGoForward(start: number, pagelimits: number, pageslength: number): boolean {
  return start + pagelimits < pageslength
}
export function canGoBack(start: number, pagelimits: number): boolean {
  return start + pagelimits > pagelimits
}

export function goForward(start: number, pagelimits: number, pageslength: number, setStart: Function) {
  if(canGoForward(start, pagelimits, pageslength))
    setStart(start+pagelimits)
}

export function goBack(start: number, pagelimits: number, setStart: Function){
  if(canGoBack(start, pagelimits))
    setStart(start - pagelimits)
}


