import request from 'superagent';
import defaultConfig from './config';

const baseUrl = 'https://cnodejs.org/api/v1/';

const handleResponse = (resolve, reject, isGet) => (
  (err, res) => {
    if (err) {
      reject(err);
    }
    resolve(isGet ? res.body.data : res.body);
  }
);

const get = (page, config) => (
  new Promise((resolve, reject) => {
    request
      .get(`${baseUrl}${page}`)
      .query(Object.assign({}, defaultConfig[page], config))
      .end(handleResponse(resolve, reject, true));
  })
);

const post = (page, requestBody) => (
  new Promise((resolve, reject) => {
    request
      .post(`${baseUrl}${page}`)
      .set('Content-Type', 'application/json')
      .send(Object.assign({}, requestBody))
      .end(handleResponse(resolve, reject));
  })
);

export { get, post };
