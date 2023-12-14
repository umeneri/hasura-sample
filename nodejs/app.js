const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

// body-parserミドルウェアの設定
app.use(bodyParser.json()); // JSONボディの解析用
app.use(bodyParser.urlencoded({ extended: true })); // URLエンコードされたデータの解析用


app.get('/', async (req, res) => {
  console.log(req.headers);
  console.log(req.body);

  const obj = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
  };

  await sleep(1000);

  res.send(JSON.stringify(obj));
});

app.post('/', async (req, res) => {
  console.log(req.method);
  console.log(req.headers);
  console.log(req.body);

  const obj = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    accessToken: 'access_token_1234567890',
  };

  await sleep(1000);

  res.send(JSON.stringify(obj));
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
