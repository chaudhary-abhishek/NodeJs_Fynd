const arr = ['giraafe','tiger','lion'];
arr.push('cheetah')
arr.forEach(element=>{
    console.log(element);
})

const fruits = ['banana','mango'];
fruits.unshift('apple');
console.log(fruits);
console.log(fruits.findIndex(findFruit));

function findFruit(fruit){
    return fruit == "banana";
}


const ages = [2,3,4];

console.log(ages.findIndex(checkAge));

function checkAge(age){
    return age>3;
}
