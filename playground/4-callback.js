// setTimeout(()=>{ //async callback, filter and forEach are sync callback
//     console.log('Time\'s up, 2 secs')
// },2000)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data ={
//             lat:0,
//             lon:0
//         }
//         // console.log(data) //does get printed as the main call has ended but the call back is still active
//         // return data // [A0] does not get printed as the retuened value is sent aftert the mail has ended,
//                         //main is printing the data
//         callback(data) //a method defined to print the data as it will be waiting for timeout(async) to end
//     },2000)
    
// }

// //console.log(geocode()) //[A0] 
// geocode('New York', data => console.log(data))


const add = (i,j,callback) => {
    setTimeout(() => {
        const sum = i + j
        callback(sum)
    },2000)
}

add(1, 2, data => console.log(data))