var x = 6, y = 15, z = 4;
y /= x + 5 % z;
// 5 % z
// x +
// y /
// y =
console.log('Example 1:',x,y,z); // 6, 2.142857142857143, 4

var x = 6, y = 15, z = 4;
z = x++ + y * 5;
// x++
// y *
// + y
// z =
console.log('Example 2:',x,y,z); // 7, 15, 81

var x = 6, y = 15, z = 4;
x += y - x++ * z;
// x++
// * z
// y -
// x +
// x =
console.log('Example 3:',x,y,z); // -3, 15, 4

var x = 6, y = 15, z = 4;
z = -- x - y * 5;
// -- x
// y *
// x -
// z =
console.log('Example 4:',x,y,z); //  5, 15, -70

var a = 3;
var b = ++a + 1 + a++;
// a++
// ++a
// a +
// + a
// b =
console.log('Example 5:',a,b); // 5, 9