import request from 'superagent';
import defaultConfig from './config';

const baseUrl = 'https://cnodejs.org/api/v1/';

const get = (page, config) => (
  new Promise((resolve, reject) => {
    request
      .get(`${baseUrl}${page}`)
      .query(Object.assign({}, defaultConfig[page], config))
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.body.data);
      });
  })
);

export { get };