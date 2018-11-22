const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const router = require('koa-router')();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}..`)
  await next()
})

router.get('/abc', async (ctx, next) => {
  ctx.response.body = `<h1>Hello, Nowki!</h1>`;
})

router.get('/api/getBlogList', async (ctx, next) => {

  ctx.body = {
    data: 1111,
    success: true
  }
})

router.get('/api/getUserInfo', async (ctx, next) => {
  
  await next()
})

app.use(router.routes());

app.listen(5700)
console.log('成功启动服务器')