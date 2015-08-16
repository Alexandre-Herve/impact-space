global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__ANDROID__ = false;

import 'babel/polyfill';
import koa from 'koa';
import serve from 'koa-static';
import * as apis from './api';
import * as routes from './routes';

/**********/
/* server */
/**********/

const app = koa();
export default app;

app.use(serve('public'));

for (let [key, api] of entries(apis)) {
  app.use(api());
}

for (let [key, route] of entries(routes)) {
  app.use(route());
}

app.listen(process.env.PORT || 3000);
console.log('ready');



/**********/
/* helper */
/**********/

function entries(obj) {
   return (for (key of Object.keys(obj)) [key, obj[key]]);
}

