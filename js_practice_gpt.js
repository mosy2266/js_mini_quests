// #1
const person = {
    name: "yun",
    age: 26,

    greet() {
        console.log(`안녕하세요, 저는 ${this.age}살 ${this.name}입니다.`);
    }
}

person.greet();

// #2
class Car {
    constructor (brand, year) {
        this.brand = brand;
        this.year = year;
    }

    getInfo(){
        console.log(`${this.brand} (${this.year})`);
    }
}

const myCar = new Car("현대", 2020)
myCar.getInfo();

// #3
const getLengths = (texts) => {
    let textLengths = []
    for (let i=0; i<texts.length; i++){
        textLengths.push(texts[i].length);
    }
    return textLengths;
}

const result = getLengths(["apple", "banana", "kiwi"]);
console.log(result);

// #4

class Counter {
    constructor () {
        this.count = 0;
    }

    increase(){
        this.count++;
    }
}

const counter = new Counter();
counter.increase();
counter.increase();
console.log(counter.count);
