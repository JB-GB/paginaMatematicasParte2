function sumar(){
    var var1 = Number(document.getElementById("sP").value);
    var var2 = Number(document.getElementById("sS").value);
    var res = var1 + var2;
    document.getElementById("divS").innerHTML = res;
    //alert("La suma es de " + res);
}

function restar(){
    var var1 = Number(document.getElementById("rP").value);
    var var2 = Number(document.getElementById("rS").value);
    var res = var1 - var2;
    document.gtElementById("divR").innerHTML = res;
    //alert("La resta es de " + res);
}

function multcar(){
    var var1 = Number(document.getElementById("mP").value);
    var var2 = Number(document.getElementById("mS").value);
    var res = var1 * var2;
    document.getElementById("divM").innerHTML = res;
    //alert("La multiplicacion es de " + res);
}

function dividir(){
    var var1 = Number(document.getElementById("dP").value);
    var var2 = Number(document.getElementById("dS").value);
    var res = var1 / var2;
    document.getElementById("divD").innerHTML = res;
    //alert("La division es de " + res);
}

function numAsc(){
    let numAss = document.getElementById("pas");
    var nums = [];
    for(var asc = 1; asc < 100; asc++){
        nums[asc] = asc + "<br>";
    }
    numAss.innerHTML = nums;
}

function calver(){
    var sonido = document.getElementById("repro")
    var cali = Number(document.getElementById("cal").value);
    if(cali > 7.99){
        document.getElementById("vercali").innerHTML = "Pasaste con " + cali;
    }
    else{
        sonido.play();
        document.getElementById("vercali").innerHTML = "Tronaste con " + cali;
        for(var loop = 0; loop < 10000; loop++){
            document.getElementById("vercali").style.backgroundColor = 'red';
            document.getElementById("vercali").style.backgroundColor = 'white';
        }
        document.getElementById("vercali").style.backgroundColor = 'none';
    }
}
function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}