/**
 * 作者: ph
 * 日期: 2019-01-21
 * 描述: 服装接口
 */
import apiFactory from "./apiFactory";

const module = {
  moduleName: "cloth",
  apis: [{
    // 服装走马灯
    method: "get", // 请求方式
    name: "clothCarousel", // 接口名称
    url: "/carousel" // 接口全路径
  },{
    // 服装分类
    method: "get", // 请求方式
    name: "clothCategory", // 接口名称
    url: "/category" // 接口全路径
  },]
};

export default apiFactory(module)
