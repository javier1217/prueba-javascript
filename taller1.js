function division(){
    var num1=document.getElementById("num1");
    var n1=num1.value;
    var num2=document.getElementById("num2");
    var n2=num2.value;

    if (n1 == 0 || n2 == 0 ){
        alert("las casillas no pueden estar vacias");
    } else{
        var res = parseInt(n1)/parseInt(n2)
        alert("El resultado de la operación es: " + res);
    }    
}

function multiplicacion(){
    var num1=document.getElementById("num1");
    var n1=num1.value;
    var num2=document.getElementById("num2");
    var n2=num2.value;

    if (n1 == 0 || n2 == 0 ){
        alert("las casillas no pueden estar vacias");
    } else{
        var res = parseInt(n1)*parseInt(n2)
        alert("El resultado de la operación es: " + res);
    }    
}

function suma(){
    var num1=document.getElementById("num1");
    var n1=num1.value;
    var num2=document.getElementById("num2");
    var n2=num2.value;

    if (n1 == 0 || n2 == 0 ){
        alert("las casillas no pueden estar vacias");
    } else{
        var res = parseInt(n1)+parseInt(n2)
        alert("El resultado de la operación es: " + res);
    }    
}

function resta(){
    var num1=document.getElementById("num1");
    var n1=num1.value;
    var num2=document.getElementById("num2");
    var n2=num2.value;

    if (n1 == 0 || n2 == 0 ){
        alert("las casillas no pueden estar vacias");
    } else{
        var res = parseInt(n1)-parseInt(n2)
        alert("El resultado de la operación es: " + res);
    }    
}