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



//WAP to reverse an integer without converting it to a string, without using any builtin methods.

// var num=1243;
// var rev=0
// while(num>0){
//     rev=(rev*10)+(num%10);
//     num=Math.floor(num/10)
// }
// console.log(rev)




//WAP to find missing elements from the array?

// function missingNum(arr){
//     let missedValue=[];
//     let min=Math.min(...arr);
//     let max=Math.max(...arr);

//     for(var i=min;i<max;i++){
//         if(arr.indexOf(i)<0){
//             missedValue.push(i)
//         }
//     }
//     return missedValue;
// }
// console.log(missingNum([4,7,9,10]))




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




