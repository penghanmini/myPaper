/**
 * 作者 ：ph
 * 日期 ：2019/01/17
 * 描述 ：headerConfig【临时措施】
 */
export default () => {
  let headerConfig = { "Content-Type": "application/json" }
  if (localStorage.accessToken) {
    headerConfig['accessToken'] = localStorage.accessToken
  }
  if (localStorage.accountId) {
    headerConfig['accountId'] = localStorage.accountId
  }
  return headerConfig
}
