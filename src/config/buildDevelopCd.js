/**
 * 作者: ph
 * 日期: 2019-01-17
 * 描述: 配置文件
 */
export default {
  env: 'development',
  apis:{
    modules:{
      //数据管理模块
      layout:{
        host: 'http://localhost:3000',
        url: ''
      },
      index:{
        host: 'http://localhost:3000',
        url: '/index'
      },
      livingHome:{
        host: 'http://localhost:3000',
        url: '/livingHome'
      },
      shoeBag:{
        host:"http://localhost:3000",
        url:"/shoeBag"
      },
      cloth:{
        host:"http://localhost:3000",
        url:"/cloth"
      },
      electric:{
        host:"http://localhost:3000",
        url:"/electric"
      },
      personalCare:{
        host:"http://localhost:3000",
        url:"/personalCare"
      },
      diet:{
        host:"http://localhost:3000",
        url:"/diet"
      },
      kitchen:{
        host:"http://localhost:3000",
        url:"/kitchen"
      },
      baby:{
        host:"http://localhost:3000",
        url:"/baby"
      },
      literaryForm:{
        host:"http://localhost:3000",
        url:"/literaryForm"
      },
      special:{
        host:"http://localhost:3000",
        url:"/special"
      },

    },
    // defaultHost: 'http://www.youedata.com',//'http://192.168.112.3:8089',//'',//'http://210.13.50.98:10133', //http://www.youedata.com/portalInterface/goods/category
    defaultUrl: ''

  },
  siteInfo:{
    // 多站点配置
    sites: {
      login_site_host: 'http://login.mainsite.com/', // 登录站地址
      file_server_url8876: "http://192.168.3.224:8876",   // 文件下载地址
      file_server_url8879: "http://192.168.3.224:8879",   // 文件下载地址
      upload_server_url: "http://192.168.3.224:8879" //上传地址
    }
  }
}
