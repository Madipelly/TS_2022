var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//generic type-why?
function insertAtBegining(array, value) {
    var newArray = __spreadArrays([value], array);
    return newArray;
}
var demoArray = [1, 2, 3];
var result = insertAtBegining(demoArray, -1);
console.log(result);
var result1 = insertAtBegining(['B', 'C', 'D'], 'A');
console.log(result1);
