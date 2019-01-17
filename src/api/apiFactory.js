/**
 * 作者 ：ph
 * 日期 ：2019/01/17
 * 描述 ：api接口工厂类
 */
import config from '../config'
import $ajax from '../plugins/axios'
import headerConfig from './headerConfig'

export default (module) => {

  let apiObject = {}

  module.apis.forEach((item) => {
    apiObject[item.name] = (params,other) => {
      let locationId = ""
      if(params && params.URI) {
        locationId = `/${params.URI}`
        delete params.URI
      }
      // 所有接口必传参数
      return $ajax({
        method: item.method,
        url: `${config.apis.modules[module.moduleName].host}${config.apis.modules[module.moduleName].url || config.apis.defaultUrl}${item.url}${locationId}`,
        data: other||params,
        headers: item.headers || headerConfig()
      })
    }
  })


  return apiObject
}


