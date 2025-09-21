// 本质：对象
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
// 面对对象编程 ---- 抽象 interface class 实现对象
// 函数式编程 ---- 函数 纯函数 函数组合 高阶函数 柯里化
// 面向切面 --- 装饰器
// 插件化

// 职责链模式

@Injectable()
export class LoggerMiddleware  implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const start = Date.now();
    // 监听响应完成事件
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(
        `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`,
      );
    });
    next();
  }
}