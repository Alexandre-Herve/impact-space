global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__ANDROID__ = false;

import 'babel/polyfill';
import koa from 'koa';

const app = koa();
export default app;

app.use(function *logger(next) {
  var time = new Date();
  yield next;

  const ms = new Date() - time;
  this.set('X-Response-Time', ms + 'ms');
});

import serve from 'koa-static';
app.use(serve('public'));

import api from './api';
app.use(api());

import counter from './counter';
app.use(counter());

app.listen(3000);
console.log('ready');
