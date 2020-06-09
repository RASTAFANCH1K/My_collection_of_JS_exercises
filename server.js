// EXERCISE-1:
// 1) необходимо написать сервер, который будет работать на порту 8090
// 2) при отправке гет запроса с таким урлом http://localhost:8090/user
// необходимо вернуть одного юзера { userName: 'Boria', id: 1, email: 'boria23@gmail.com'}
// 3) при отправке гет запроса с таким урлом http://localhost:8090/users?id=1, где id может быть одно из чисел которое 
// соответствует одному из id с массива users. В случае если такого юзера не существует то вернуть текст "User with 
// following id does not exist"
// имея
// const users = [
//   { userName: 'Boria', id: 1, email: 'boria23@gmail.com'},
//   { userName: 'Vasia', id: 2, email: 'boria23@gmail.com'},
//   { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
//   { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
//   { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
// ];
// SOLUTION:

const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8090;

const users = [
  {userName: 'Boria', id: 1, email: 'boria23@gmail.com'},
  {userName: 'Vasia', id: 2, email: 'boria23@gmail.com'},
  {userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
  {userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
  {userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
];

const requestListener = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const q = url.parse(req.url, true);
  const pathName = q.pathname;
  const qdata = q.query;
  const id = qdata.id;

  if (pathName === '/') {
    res.end(JSON.stringify(users));
  } else if (pathName === '/user') {
    res.end(JSON.stringify(users.find(user => user.id === 1)));
  } else if (pathName === '/users' && id) {
    const body = users.find((user) => user.id == id);
    if (body) {
      res.end(JSON.stringify(body));
    } else {
      res.end(JSON.stringify({error: `User with following id: ${id} does not exist`}));
    }
  } else {
    res.end(JSON.stringify({error: 'Following adress does not exist'}));
  }
}

const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`);
});