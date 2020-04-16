'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let expensesCategory = prompt("Введите обязательную статью расходов в этом месяце");
let expensesValue = prompt("Во сколько обойдется?");

/* let appData = {
	budjet: money,
	timeData: time,
	expenses ={
		"expensesCategory":"expensesValue"
	}
	optionalExpenses = {};
	let income = ['',''];
	savings: false; */
/* } */

alert (+money/30);