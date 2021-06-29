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

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Logical Reasoning -

// A simple scenario: Suppose Jon is waiting for the result of an exam, and he plans a vacation based on his exam score.
// The exam result is divided into 4 rankings: A, B, C, and D:
// If Jon gets an A, he rewards himself and goes for travel happily.
// If Jon gets a B, the reward drops to normal shopping.
// If Jon gets a C, he stays home and watches TV.
// If Jon gets a D, he’ll go to the library and work on the subject.

const travel = () => {
	console.log('John goes on a vacation');
};
const shop = () => {
	console.log('John goes shopping');
};
const watch = () => {
	console.log('John watches Tv');
};
const library = () => {
	console.log('John goes to the library');
};

// John's Ranking
let rankings = [
	'A',
	'B',
	'C',
	'D'
];
let ranking = rankings[Math.floor(Math.random() * 4)];

// Function to implement simple if-else
const simpleConditional = () => {
	// Using simple if else
	if (ranking == 'A') travel();
	else if (ranking == 'B') shop();
	else if (ranking == 'C') watch();
	else if (ranking == 'D') library();
};

// Function to implement switch case condition
const switchCase = () => {
	// Using switch case
	switch (ranking) {
		case 'A':
			travel();
			break;
		case 'B':
			shop();
			break;
		case 'C':
			watch();
			break;
		case 'D':
			library();
			break;
	}
};

// Function to implement Object Conditional Reasoning
const objConditional = () => {
	// Object for Object Conditional Reasoning
	let strategies = {
		A : travel,
		B : shop,
		C : watch,
		D : library
	};
	let strategy = strategies[ranking];
	strategy();
};

// Function to implement Map Conditional Reasoning
const mapConditional = () => {
	// Map for Map Conditional Reasoning
	let strategies = new Map([
		[
			'A',
			travel
		],
		[
			'B',
			shop
		],
		[
			'C',
			watch
		],
		[
			'D',
			library
		]
	]);
	strategy = strategies.get(ranking);
	strategy();
};
