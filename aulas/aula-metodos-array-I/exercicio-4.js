let array = ["a", "b", "c", "d", "e", "f", "g"];
array.splice(1, 2, "z", "3", "x");

console.log(array);

array = ["a", "b", "c", "d", "e", "f", "g"];
array.splice(1, 0, "z", "3", "x");

console.log(array);

//push
array = ["a", "b", "c", "d", "e", "f", "g"];
array.splice(array.length, 0, "z");

console.log(array);

//pop
array = ["a", "b", "c", "d", "e", "f", "g"];
array.splice(array.length - 1, 1);

console.log(array);

//shift
array = ["a", "b", "c", "d", "e", "f", "g"];
array.splice(0, 1);

console.log(array);

//unshift
array = ["a", "b", "c", "d", "e", "f", "g"];
array.splice(0, 0, "z");

console.log(array);
