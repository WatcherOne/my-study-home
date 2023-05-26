####  后台服务端

> 文件结构说明
src
   |___admin__domain        // 一些封装的实体类以及方法
   |     |____entity        // 关联数据库的 Dao 层
   |     |____middlewares   // 中间件包括一些登录验证等
   |     |____service       // 服务层，接口方法实现
   |
   |___mysql__index.js      // mysql的连接
   |     |____sequelize.js  // sequelize-ORM的关系映射实例
   |
   |___redis__index.js      // redis的conncet
   |     |____token.js      // redis的token存储
   |
   |___router               // 接口路由配置
   |___tip                  // 统一定义语言文案
   |___utils                // 常用方法：密码加密，生成token，解析token等
   |___config.js            // 全局配置变量
   |___index.js             // 入口路径：创建服务等配置

```
npm i         // 安装依赖
npm run serve // 运行项目
npm run model // 对应数据库生成模型 
```

// Todo
1. nodemon - 热启动
