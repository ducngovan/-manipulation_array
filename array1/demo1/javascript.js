let x=0;
let mang = [];
function AddElementOutput() {
    let e = "<hr/>";
    let b;
    mang[x]=document.getElementById('element').value;
    x++;
    for(let i=0; i<mang.length;i++){
        b += "thu tu: " +i+ " = "+mang[i]+ "<br/>";
    }document.getElementById('out').innerHTML=b;
}

// let x = 0;
// let array = [];
//
// function AddElementOutput() {
//
//     let e = "<hr/>";
//     array[x] = document.getElementById("element").value;
//     x++;
//     for (let i = 0; i < array.length; i++) {
//         e += "thu tu: " + i + " = " + array[i] + "<br/>";
//
//     }
//     document.getElementById("out").innerHTML = e;
//
// }
