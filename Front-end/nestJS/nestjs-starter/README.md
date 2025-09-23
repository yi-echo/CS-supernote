# nestJS-starter


### nodejs--->nestJS框架


express
koa-------------只是实现了 http服务  中间逻辑需要自己实现
eggjs -------------有合理的分层，但是ts 支持不好  
nestjs ------------ts + 注解开发



接口开发的核心技术

                   数据校验
                   数据库连接
                   权限控制
用户 -------------- 服务端 ----------------- 数据库
                    日志
                    错误
                    接口响应


约定大于配置

monorepo方法

nest g module user


FP & OOP & AOP & Ioc/DI

function programing
    确定的数据输入，输出；独立；透明

Object Oriented programing
    抽象、封装（高内聚低耦合）、继承、多态

Aspect Oriented programing

Inversion Of control / Dependency Injecton
    设计模式                     实现方式

库：reflect-metadata
https://www.npmjs.com/package/reflect-metadata

nest生命周期

客户端-中间件-守卫-拦截器-管道-控制器-服务-拦截器-过滤器-响应-客户端

MVC & DTO & DAO


顶层设计：
    项目需求分析： 核心的痛点和问题是什么？技术服务用户！
                功能 的最小闭环是什么？
                辅助最小闭环的实现到项目上线，需要什么技术和方案？

    接口服务：web 服务+sql+redis

    最小闭环：接口 curd + 登录认证 + 权限控制 鉴权

    服务器部署和测试 + 提供文档 （需求 测试 部署 产品。。。）

项目技术栈： nestjs + ts
    orm库：typeorm->数据库对接方案
    bootstra5.x + vue3

    由简入繁，最小闭环为主！