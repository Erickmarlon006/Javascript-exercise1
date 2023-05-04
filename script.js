var fahrenheit = document.querySelector("#fahrenheit");
var celsius = document.querySelector("#celsius");

fahrenheit.onchange = function(){
    let f = fahrenheit.value;
    let c = 5 * ((f-32)/9)
    celsius.value = c.toFixed(2);
}
celsius.onchange = function(){
    let c = celsius.value;
    let f = (9 * (c/5)) + 32;
    fahrenheit.value = f.toFixed(2);
    if (f == 0){
        f = "";
        c = "";
    }

}

