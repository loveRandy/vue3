//获取localstorage
export const getLocal = (item: string) => {
  return localStorage.getItem(item)
}

//设置localstorage
export const setLocal = (key: string, value: any) => {
  localStorage.setItem(key, value)
}

//移除
export const removeLocal = (key: string) => {
  localStorage.removeItem(key)
}