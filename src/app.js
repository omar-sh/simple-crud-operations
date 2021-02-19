const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./utils/config');
const port = config.port || 8080;
const routes = require('./routes')
const MidException = require('./utils/MidException');
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(routes)


app.use((req,res,next) => {

  res.status(404).send({
    message: 'not_found',
    statusCode: 404,
    code: 101,
    details: null
  })


})

app.use((err, req, res, next) => {
  const errorObj = {
    message: 'internal_server_error',
    statusCode: 500,
    code: 500,
    details: null
  }
  if (err instanceof MidException) {
    errorObj.message = err.message;
    errorObj.statusCode = err.statusCode;
    errorObj.details = err.details;
    errorObj.code = err.code;
  }
  console.log('err', err);
  return res.status(errorObj.statusCode).send(errorObj);
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
