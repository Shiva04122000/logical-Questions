//WAP to find Second largest element in an array: without sorting, without using any built -in methods and without deleting duplicate elements.What will be the time complexity ?

// const arr = [19, 70, 65, 4, 8, 5, 0, 21, 7, 22, 1, 4];
// var max1 = -Infinity;
// var max2 = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max1) {
//         max2 = max1;
//         max1 = arr[i]
//     } else if (max2 < arr[i] && arr[i] < max1) {
//         max2 = arr[i];
//     }
// }
// console.log(max2);











// Q.Send dynamic Query as payload don't send key if value is empty (Review Question)

// const payload ={
//     search:"ssd",
//     page:10,
//     data:"",
//     offset:20,
//     abc: "",
//     xyz: "" 
// }

// const keys=Object.keys(payload) 

// let url=[]
// keys.filter(data=>{
//   if(payload[data] !==""){
//       url.push(`${data}=${payload[data]}`)
//   }
// })

// url = url.join('&')
// console.log(url)



// Q. Guess the Output (Review Question)

// function abc(){
//     try{
//         throw new Error()
//     }catch(x){
//         var x = 1
//         var y = 2
//         console.log(x)
//     }
//     console.log(x)
//     console.log(y)
// }
// abc()




