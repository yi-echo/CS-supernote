// http 
// fs
// os
// path
// url
import os from 'os'
import path from 'path'
import fs from 'fs'
import http from 'http'
import url from 'url'

/**
 * 服务层的代码  业务逻辑
 * 提供数据
 * 提供接口
 * 提供服务
 * 缓存
 * 数据库
 * 文件 io
 * 
 * RESTful API
 * SOAP
 * GraphQL
 * gRPC
 */
const service = {
   "/": "Home Page",
   "/about": { name: "About Page11" }
}

/**
 * 控制器   前端和后端的门卫 请求参数的校验
 * 路由
 * 中间件
 * 模板引擎
 * ORM
 * 
 * MVC
 * M: model 数据模型  数据库的表结构
 * V: view 视图  前端页面
 * C: controller 控制器  业务逻辑
 */
const controller = {
    '/': (req, res) => {
        // res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(service["/"]),
        res.end()
        // res.end('<h1>Home Page</h1>')
    },
    "/about": (req, res) => {
        // res.writeHead(200, { 'Content-Type': 'application/json' })
        // res.end('{"name": "About Page"}')
        res.end(JSON.stringify(service["/about"]))
        res.end()
    }
}

const server = http.createServer((req, res) => {
    res.writeHead(200,
        //  { 'Content-Type': 'text/plain' }
        { 'Content-Type': 'application/json' }
        )
    const parsedUrl = req.url
    console.log('parsedUrl', parsedUrl)

    if (controller[parsedUrl]) {
        controller[parsedUrl](req, res)
        return;
    }

    res.end();
})

const PORT = 3000

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})