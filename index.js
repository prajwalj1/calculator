alert("hello")
function abc(){
let a=parseInt(document.querySelector("#content").value);
let b=parseInt(document.querySelector("#content1").value);
let e=parseInt(document.querySelector("#sucess").value);
let result;
switch(e){
    case 1: result=a+b;
    break;
    case 2: result=a-b;
    break;
    case 3: result=a/b;
    break;
    case 4: result=a*b;
    break;
}
document.querySelector("#tor").value=result;
}