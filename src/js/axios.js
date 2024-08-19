console.log('Бібліотека Axios:');

import axios from 'axios';

// Синтаксис запиту
console.log('Синтаксис запиту:');

axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/users'
})
	.then(response => console.log(response))
	.catch(error => console.log(error));

// Псевдоніми методів запиту
console.log('Псевдоніми методів запиту:');

// Метод axios.get(url[, config]):

axios.get('https://jsonplaceholder.typicode.com/users')
	.then(response => console.log(response))
	.catch(error => console.log(error))


// Об'єкт відповіді
console.log("Об'єкт відповіді:");

// {
//   data: {},          — відповідь, надана сервером;           
//   status: 200,       — код стану HTTP з відповіді сервера;
//   statusText: 'OK',  — повідомлення про стан HTTP від відповіді сервера;
//   headers: {},       — заголовки HTTP, з якими відповів сервер;
//   config: {},        — конфігурація, яка була надана Axios для запиту;
//   request: {}        — запит, який створив цю відповідь;
// }

axios.get('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers); // AxiosHeaders {cache-control: 'max-age=43200', content-type: 'application/json; charset=utf-8', expires: '-1', pragma: 'no-cache'}
        console.log(response.config);// {transitional: {…}, adapter: Array(3), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
        console.log(response.request);// XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
	})
	.catch(error => {
		console.log(error);
	})

// Конфігурація за замовчуванням
console.log('Конфігурація за замовчуванням:');

axios.get('https://jsonplaceholder.typicode.com/users')
	.then()
	.catch();

axios.get('https://jsonplaceholder.typicode.com/posts')
	.then()
	.catch();

axios.get('https://jsonplaceholder.typicode.com/todos')
	.then()
	.catch();

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.get('/users')
    .then(response => console.log(response))
	.catch();

axios.get('/posts')
	.then(response => console.log(response))
	.catch();

axios.get('/todos')
	.then(response => console.log(response))
	.catch();

// Заголовки за замовчуванням
console.log('Заголовки за замовчуванням:');

const myApiKey = "secret-api-key-for-every-request";

axios.defaults.headers.common["header-name"] = myApiKey;

// Параметри рядка запиту
console.log('Параметри рядка запиту:');

// 1.Ти, звісно, можеш вказати їх у URL.

axios.get("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name");

// 2.Або використати клас URLSearchParams.

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);

// 3.Але Axios надає нам зручніший спосіб. 
// В об'єкті конфігурації (параметр config) 
// ти можеш вказати об'єкт параметрів у властивості params.

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);






