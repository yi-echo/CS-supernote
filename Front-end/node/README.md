# Node

## Nodejs开发服务器
架构设计：
-monorepo架构
-分层
 - 请求、响应（controller_
 - 服务核心层（service, IO , 文件， 身份鉴权，邮件服务...）
 - 消息机制（kafka、【Flink】、Clickhouse）
 - 缓存（内存、redis）
 - 数据持久层化（mysql, mongoDB, postgresql）矢量数据库 ES 非关系 关系 内存 自定义字段类型 js 函数存储过程支持
 - 数据中台，数仓，大数据 hadoop hive clickhouse达梦
 - 结构设计
    松散，ioc,aop
    思想，函数式编程，响应式编程rxjs

## node基础服务
需要用到的模块，http,net 


## node http 服务协议升级 （ws）

数据实时同步：
 暴力解法；轮询 request interval
 方案 技术点 将就；ws 层次 tcp/ip 哪一层呢？
 sse    


 buffer
 stream



 express简化http开发


 ## 一个好的服务端架构体系，需要包含哪些模块和结构？

1.网络层
    - http
    - ws
    - tcp
2.中间件
    - koa、express、axios 
    - cookie
    - cors, 跨域
    - body, body-parse  
    - log
    - compression, 压缩
3.缓存
 - http 缓存， 强缓存，协商缓存，策略缓存
 - redis
4.数据库层
 - postgresql,pg
 - clickhouse
 - tiDB
 - orm,dao,dto
 - 连接池
 - 事务
 - 存储过程
5.安全
 - 身份认证（学问auth2.0）注册登录 cookie、 jwt 、 双 token+cookie、OAuth2
 - 单点登录 oss 
 - 数据安全
 - ps: 一切的 spa 应用别给我谈安全 ssr
6.设计模式
    - mvc架构 
    - 微服务
    - 中间件架构
7.其他
 - 消息队列，kafka、rabbitMQ
 - 任务队列，cron,schedule

8.性能优化
    - 数据库分库分表，负载均衡
    - cluster worker child-process

## 