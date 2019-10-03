var x = 0;
var array = [];
function addElementToArray() {
    let e = "<hr/>";
    array[x] = document.getElementById("txtValue").value;
    x++;
    for (let i = 0; i < array.length; i++) {
        e += "thu tu: " + i + " = " + array[i] + "<br/>";

    }
    document.getElementById("result").innerHTML = e;

}


// let a=parseInt(prompt('Nhap a :'))
// let out1,out2, out3;
// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0 ){
//         out1 =i;
//         document.write(out1+ 'FizzBuzz'+'<br>');
//         // alert('FizzBuzz')
//
//     }else if(i%3==0){
//         out2=i;
//         document.write(out2+ 'Buzz'+ '<br>' );
//         // alert('Buzz')
//     }else if(i%5==0) {
//         out3=i;
//         document.write(out3+ 'Fizz'+'<br>' );
//         // alert('Fizz')
//
// }
//     }


