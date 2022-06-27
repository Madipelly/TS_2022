//generic type-why?
function insertAtBegining<T>(array: T[], value: T){
    const newArray = [value,...array];
    return newArray;
}

let demoArray = [1,2,3];
let result = insertAtBegining(demoArray, -1);
console.log(result);

let result1 = insertAtBegining(['B','C','D'], 'A');
console.log(result1);






