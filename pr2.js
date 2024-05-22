function modu(){
    let a=document.getElementById('mod-1').value;

    if(a%3==0){
        document.getElementById('res-3').innerHTML="your number is divided by 3 ..."
    }
    else{
        document.getElementById('res-3').innerHTML="your number is not divided by 3!!"
    }
}