class Person {
	constructor (name, age, salary, sex) {
		this.name = name;
		this.age = age;
		this.salary = salary;
		this.sex = sex;
	}

	static sort (arr, field, order) {
		const arr1 = [
			...arr
		];
		quickSort(arr1, 0, arr1.length - 1, field);
		if (order === 'desc') {
			arr1.reverse();
		}

		return arr1;
	}
}

const partition = (arr, l, h, field) => {
	let pivot = arr[l];
	let i = l;
	let j = h;
	while (j > i) {
		while (arr[i][field] <= arr[l][field] && i < h) {
			i++;
		}

		while (arr[j][field] > arr[l][field] && j >= l) {
			j--;
		}

		if (j > i) {
			[
				arr[i],
				arr[j]
			] = [
				arr[j],
				arr[i]
			];
		}
	}

	[
		arr[l],
		arr[j]
	] = [
		arr[j],
		arr[l]
	];
	return j;
};

const quickSort = (arr, l, h, field) => {
	if (l < h) {
		let pivot = partition(arr, l, h, field);
		quickSort(arr, l, pivot - 1, field);
		quickSort(arr, pivot + 1, h, field);
	}
};

let Persons = [
	[
		'Vidith',
		19,
		480000,
		'Male'
	],
	[
		'Aakash',
		19,
		100000,
		'Male'
	],
	[
		'Tanvi',
		20,
		250000,
		'Female'
	],
	[
		'Abhay',
		21,
		220000,
		'Male'
	],
	[
		'Riya',
		18,
		50000,
		'Female'
	],
	[
		'Anushka',
		22,
		350000,
		'Female'
	],
	[
		'Teena',
		17,
		99000,
		'Female'
	],
	[
		'Sara',
		20,
		1000000,
		'Female'
	],
	[
		'Rishabh',
		16,
		49000,
		'Male'
	]
];

let myArr = [];
Persons.forEach((person) => {
	myArr.push(new Person(...person));
});

const sortedArr = Person.sort(myArr, 'name', 'desc');
console.log(sortedArr);
