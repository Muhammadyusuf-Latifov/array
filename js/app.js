// =============================== for ==================================

{
  //  m - 1
  //   function kvadrat(arr) {
  //     let newArr = [];
  //     for (let i = 0; i < arr.length; i++) {
  //       newArr.push(arr[i] ** 2);
  //     }
  //     return newArr;
  //   }
  //   console.log(kvadrat([1, 4, 3, 6, 4, 7]));
}
{
  // m - 2
  //   function mrName(arr) {
  //     let newArr = [];
  //     for (let i = 0; i < arr.length; i++) {
  //       newArr.push("Mr." + arr[i]);
  //     }
  //     return newArr;
  //   }
  //   console.log(mrName(["John", "Akmal", "Kamol"]));
}
{
  // m - 3
  //   function toq(arr) {
  //     let newArr = [];
  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i] % 2 === 1) {
  //         newArr.push(arr[i]);
  //       }
  //     }
  //     return newArr;
  //   }
  //   console.log(toq([1, 2, 3, 4, 5, 6, 7, 7]));
}
{
  //  m - 4
  //   function juftYigindi(arr) {
  //     let sum = 0;
  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i] % 2 === 0) {
  //         sum += arr[i];
  //       }
  //     }
  //     return sum;
  //   }
  //   console.log(juftYigindi([1, 2, 3, 4, 5]));
}

{
  // m - 5
  //   let arr = ["akmal", "john"];
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let word = arr[i];
  //     let son = word.length;
  //     newArr.push(son);
  //   }
  //   console.log(newArr);
}
// ==================================== forEach =======================================

{
  //m - 1
  //   function kvadrat(arr) {
  //     let newArr = [];
  //     arr.forEach((value) => {
  //       newArr.push(value ** 2);
  //     });
  //     return newArr;
  //   }
  //   console.log(kvadrat([1, 3, 2, 6, 3]));
}
{
  //  m - 2
  //   function fname(arr) {
  //     let newArr = [];
  //   arr.forEach((value) => {
  //       newArr.push("Mr." + value);
  //     });
  //     return newArr;
  //   }
  //   console.log(fname(["akmal", "john"]));
}
{
  //  m - 3
  //   function toq(arr) {
  //     let newArr = [];
  //     arr.forEach((value) => {
  //       if (value % 2 === 1) {
  //         newArr.push(value);
  //       }
  //     });
  //     return newArr;
  //   }
  //   console.log(toq([1, 2, 3, 4, 5, 6]));
}
{
  //  m - 4
  //   function yigindi(arr) {
  //     let sum = 0;
  //     arr.forEach((n) => {
  //       if (n % 2 === 0) {
  //         sum += n;
  //       }
  //     });
  //     return sum;
  //   }
  //   console.log(yigindi([1,2, 2, 3, 4, 5, 6]));
}
{
  //  m - 5
  //   function son(arr) {
  //     let newArr = [];
  //     arr.forEach((n) => {
  //       let word = n;
  //       let count = word.length;
  //       newArr.push(count);
  //     });
  //     return newArr;
  //   }
  //   console.log(son(["laylo", "akmal", "bek"]));
}
//============================================ map, reduce, filter =========================================
{
  //  m - 1
  //   function kvadrat(arr) {
  //     return arr.map((k) => k ** 2);
  //   }
  //   console.log(kvadrat([1, 4, 3, 2, 7]));
}
{
  //  m - 2
  // function mrName(arr) {
  //   return arr.map((i) => "Mr." + i);
  // }
  // console.log(mrName(["john", "akmal"]));
}
{
  //  m - 3
  //   function toq(arr) {
  //     return arr.filter((i) => i % 2 === 1);
  //   }
  //   console.log(toq([1, 2, 3, 4, 5]));
}
{
  // m - 4
  //   function yigindi(arr) {
  //     return arr.filter((i) => i % 2 === 0).reduce((sum, value) => (sum += value));
  //   }
  //   console.log(yigindi([1, 2, 3, 4, 5, 6, 2]));
}
{
  // m - 5
  //   function son(arr) {
  //     let sozSoni = 0;
  //     sozSoni = arr.map((i) => i.length);
  //     return sozSoni;
  //   }
  //   console.log(son(["laylo", "bek"]));
}
