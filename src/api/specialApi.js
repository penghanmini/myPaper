/**
 * 作者: ph
 * 日期: 2019-01-21
 * 描述: 特色区接口
 */
import apiFactory from "./apiFactory";

const module = {
  moduleName: "livingHome",
  apis: [{
    // 首页走马灯
    method: "get", // 请求方式
    name: "livingHomeCarousel", // 接口名称
    url: "/carousel" // 接口全路径
  },]
};

export default apiFactory(module)
