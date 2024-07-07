function* generator() {

    console.log("Generator started")
    yield 1;

    console.log("after 1st yield")
    yield 2;

    console.log("after 2nd yield")
    yield 3;
    
    console.log("Generator ended")
}

const gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
