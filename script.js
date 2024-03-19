let number = +prompt("Son kriting");
while (isNaN(number) || number == 0) {
    number = +prompt("bu yerga son kritish kerak");
}
let box = " "

for (let i = 1; i <= number; i++) {
    if(i == 1){
        box = box + i + ' qoy... '
    }else{
        box = box + i + ' qoylar... '
    }
    
}
console.log(box);


// for (let i = 0; i < 2; i++) {
//     for (let j = 1; j <= number; j++) {
//         if(j == 1){
//             box = box + j + ' qoy... '
//         } else{
//             box = box + j + ' qoylar... '
//         }
//     }
//     console.log(box);
// }