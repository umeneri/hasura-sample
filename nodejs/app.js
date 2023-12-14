const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;


// body-parserミドルウェアの設定
app.use(bodyParser.json()); // JSONボディの解析用
app.use(bodyParser.urlencoded({ extended: true })); // URLエンコードされたデータの解析用


app.get('/', (req, res) => {
  console.log(req.headers);
  console.log(req.body);

  const obj = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
  };

  res.send(JSON.stringify(obj));
});

app.post('/', (req, res) => {
  console.log(req.method);
  console.log(req.headers);
  console.log(req.body);

  const obj = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
  };

  res.send(JSON.stringify(obj));
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
