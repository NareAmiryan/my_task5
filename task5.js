//exercise 1 
function even_odd_sep (arr) {
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      arr1.push(arr[i]);
    }
    else{
      arr2.push(arr[i]);
    }
  }
}

let arr1 = [];
let arr2 = [];
let arr = [4,5,6,7,8];
even_odd_sep(arr);
alert("even numbers " + arr1);
alert("odd numbers " + arr2);

//exercise 2
let my_arr1=[4,5,6,7,8,9];
let my_arr2=[8,45,6,55,4];
let array1=[];

function dup_it_arr(arr3,arr4){
for(let i = 0;i < arr3.length;i++){
  if(checking(arr3,arr4[i])){
    array1.push(arr4[i]);
   }
  }
 }

function checking (array,num){
  for(let i = 0; i < array.length; i++){
    if(num == array[i]){
      return true;
    }
  }
  return false;
}

dup_it_arr(my_arr1,my_arr2);
alert(array1);

//exercise 3
let arr_3 = [4,5,8,9,7,10];
let elem = 8;

function checking2 (myarray,myelem){
  for(let i = 0; i < myarray.length; i++){
    if(myarray[i] == myelem){
      return true;
    }
  }
  return false;
}

alert(checking2(arr_3,elem));

//exercise 4
function keys () {
  let my_array = [];
  let object = {
    'weight' : '70',
    'height' : '180',
    'firstname' : 'hfdjk'
  }
  for(let key in object){
    my_array.push(key);
  }
  return my_array;
}

alert (keys());

//exercise 5

function containsDigit(number1,digit)
{
    while (number1 > 0)
    {
        let curr_digit = number1 % 10;
        if (curr_digit == digit) {
          return true;
        }
        number1 = Math.floor (number1 / 10) ;
    }

    return false;
}

alert(containsDigit(15869,8));

//exercise 6
let number7 = 3567;
let max = 0;
let min = number7 % 10;
while (number7 > 0) {
  var currentdigit = number7 % 10;
  max = currentdigit > max ? currentdigit : max;
  min = currentdigit < min ? currentdigit : min;
  number7 = Math.floor(number7 / 10);
}

alert(max - min);
