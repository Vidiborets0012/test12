// Асинхронні функції

// Для оголошення асинхронної функції
// перед ключовим словом function додається async.

// async function fetchData() {
// 	// ...
// }


// У функціональному виразі 
// також перед ключовим словом function додається async.

// const fetchData = async function() {
// 	// ...
// }


// Для оголошення асинхронної стрілкової функції
// перед списком параметрів додається ключове слово async.

// const fetchData = async () => {
// 	// ...
// }


// Для оголошення асинхронного методу об'єкта 
// async додається перед іменем методу.

// const user = {
//   async getUsername() {
//     // ...
//   },
// };


// Для оголошення асинхронного методу класу 
// також використовується async перед іменем методу.

// class User {
//   async getUsername() {
//     // ...
//   }
// }

// Значення, що повертається

// const foo = async () => {
// 	return 5;
// };

// foo().then(value => {
// 	console.log(value); // 5
// });

// const foo1 = async () => {
// 	// Не вказуємо значення для повернення
// };

// foo1().then(value => {
// 	console.log(value); // undefined
// });


// Оператор await

// const foo2 = async () => {
// 	console.log("Before await");

// 	const promiseValue = await new Promise(resolve => {
// 		setTimeout(() => resolve(5), 2000)
// 	});	

// 	console.log("After await", promiseValue);
// };

// foo2(); // через 2 секунди виведеться в консоль  "After await" 5

// ***************************************************************
// ***************************************************************
// HTTP-запити

// перепишемо функцію fetchUsers, використовуючи цей синтаксис
import axios from 'axios';

// const fetchUsers = () => {
// 	axios.get("https://jsonplaceholder.typicode.com/users")
// 	  .then(response => {
// 			console.log(response.data);
// 	  });
// };

// fetchUsers();

// const fetchUsers1 = async () => {
// 	const response = await axios.get("https://jsonplaceholder.typicode.com/users");
// 	console.log(response.data);
// };

// fetchUsers1();

// // Якщо результат HTTP-запиту потрібно використовувати в зовнішньому коді ==>

// const fetchUsers2 = async () => {
// 	const response = await axios.get("https://jsonplaceholder.typicode.com/users");
// 	return response.data;
// };

// fetchUsers2()
// 	.then(users => console.log(users));

// **************************************************
// **************************************************

// Конструкція try…catch

// console.log("Before try...catch");

// try {
//   const result = 10 / 0;
//   console.log(result); // Цей рядок не виконається через помилку INFINITY
// } catch (error) {
//   // Обробимо помилку
//   console.error(error.message);
// }

// console.log("After try...catch");


// Обробка помилок

const fetchUsers3 = async () => {
	try {
		const response = await axios.get("https://jsonplaceholder.typicode.com/users");
		console.log(response.data);
	} catch(error) {
		console.log(error);
	}
};

fetchUsers3();


const fetchUsers4 = async () => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/users");
	return response.data;
};

fetchUsers4()
  .then(users => console.log(users))
  .catch(error => console.log(error));



const fetchUsers5 = async () => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/users");
	return response.data;
};

const doStuff = async () => {
  try {
    const users = await fetchUsers5();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

doStuff();



