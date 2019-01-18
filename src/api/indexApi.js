/**
 * 作者: ph
 * 日期: 2019-01-17
 * 描述: 首页接口
 */
import apiFactory from "./apiFactory";

const module = {
  moduleName: "index",
  apis: [{
    // 首页走马灯
    method: "get", // 请求方式
    name: "indexCarousel", // 接口名称
    url: "/carousel" // 接口全路径
  },{
    // 首页年货集市
    method: "get", // 请求方式
    name: "indexMarket", // 接口名称
    url: "/market" // 接口全路径
  },]
};

export default apiFactory(module)
