//a
const student={}
student.name='Dipali';
student.email='dip@gmail.com';
student.age=21
console.log(student)
console.log(student.name)

//b
student.age=10
console.log(student.age)

//c
student.greet = function() {
    console.log(`Hello, ${this.name}!`);
};

student.greet();


student.address = {
    country: 'India',
    city: 'Nagpur',
    pin_code: 441501
};

console.log(student.address.country);

student.address.pin_code = 440001;

console.log(student.address)


//d
const friend = {
    name: 'saryu',
    email: 'sryu@gmail.com',
    age: 21,
    address: {
        country: 'India',
        city: 'Ajmer',
        pin_code: 50001
    },
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};
friend.greet(); 
console.log(friend);

//e

const topper = {
    name: 'DIPALI',
    email: 'dipa@gmail.com',
    age: 21,
    address: {
        country: 'India',
        city: 'Hingoli',
        pin_code: 431702
    },
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};

topper.greet(); 
console.log(topper);


//f

class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country: country,
            city: city,
            pin_code: pin_code
        };
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }

    getFullAddress() {
        return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
    }
}

const student1 = new Student('anu', 'anu@gmail.com', 21, 'India', 'kalmuri', 12345);
const friend1 = new Student('siri', 'siri@gmail.com', 24, 'India', 'pune',  345677);
const topper1 = new Student('Ashu', 'ashu@gmail.com', 25, 'India', 'washim', 124345);

console.log(student1);
console.log(friend1);
console.log(topper1);

student1.greet(); 
friend1.greet();  
topper1.greet();  

console.log(student1.getFullAddress()); 
console.log(friend1.getFullAddress());  
console.log(topper1.getFullAddress()); 
