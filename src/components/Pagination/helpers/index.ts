
export function getPagesNumber(count: number, limit: number): Array<number> {
  let calcpages = Math.ceil(count / limit)
  let pg = []
  for(let i = 1; i <= calcpages; i++)
    pg.push(i)
  return pg
}

export function canShow(index: number, start: number, pageSize: number): boolean {
  return index >= start && index < start + pageSize;
}

export function canGoForward(start: number, pageSize: number, pageslength: number): boolean {
  return start + pageSize < pageslength
}
export function canGoBack(start: number, pageSize: number): boolean {
  return start + pageSize > pageSize
}

export function goForward(start: number, pageSize: number, pageslength: number, setStart: Function) {
  if(canGoForward(start, pageSize, pageslength))
    setStart(start+pageSize)
}

export function goBack(start: number, pageSize: number, setStart: Function){
  if(canGoBack(start, pageSize))
    setStart(start - pageSize)
}

