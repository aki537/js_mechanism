function Person1(name, age) {
	this.name = name;
	this.age = age;
}

Object.defineProperty(Person1.prototype, 'name', {
	get: function() {
		console.log('hello');
		// return this._name;
		return this.hello;
	},
  set: function(val) {
		this_name = val;
	}
});

const p1 = new Person1('Bob', 23);

p1.name = 'Tom'
console.log(p1.name)



class Person2 {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		return this._name;
	}

	set name(val) {
		this._name = val;
	}

	static hello() {
		console.log('hello')
	}

	static hello() {
		console.log('hello')
	}
}

const p2 = new Person2('Bob', 23);

Person2.hello()