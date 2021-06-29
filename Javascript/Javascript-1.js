// Implement syntax of the following in javascripts :

// • Loops
// • If, else and switch statements
// • Writing functions making use of the above

// Array to loop through
let myArr = [
	2,
	3,
	5,
	7,
	11,
	13,
	17,
	19
];

// Object to loop through
let myObj = {
	key1 : 'Value1',
	key2 : 'Value2',
	key3 : 'Value3',
	key4 : 'Value4'
};

// Function to implement For loop
const forLoop = () => {
	// For loop to loop through Array
	for (let i = 0; i < myArr.length; i++) {
		console.log(myArr[i]);
	}
};

// Function to implement For in loop
const forInLoop = () => {
	// For in loop to loop through Object
	for (const key in myObj) {
		console.log(`${key} : ${myObj[key]}`);
	}
};

// Function to implement For of loop
const forOfLoop = () => {
	// For of loop to loop through Array
	for (const el of myArr) {
		console.log(el);
	}
};

// Function to implement While Loop
const whileLoop = () => {
	const listOfNames = [];
	const menu = 'What would you like to do? ' + '\n1. Insert new name' + '\n2. Print names';

	let command = prompt(menu);

	//collects name as long as user
	//chooses to insert new name
	while (command == '1') {
		let name = prompt('Enter name:');
		listOfNames.push(name);
		command = prompt(menu);
	}

	//print list of names
	console.log(listOfNames);
};

// Function to implement Do-While Loop
const doWhileLoop = () => {
	const listOfNames = [];
	const menu = 'What would you like to do? ' + '\n1. Insert new name' + '\n2. Print names';
	let command = '';
	do {
		command = prompt(menu);
		if (command == '1') {
			let name = prompt('Enter name:');
			listOfNames.push(name);
		}
	} while (command == '1');

	//print list of names
	alert(listOfNames);
};
