let a = document.getElementById('n');
    let b = document.getElementById('un');
    let c = document.getElementById('p');
    let d = document.getElementById('cp');
    let e = document.getElementById('m');
    let f = document.getElementById('h');
function myfunc(){
    let z = ( a || b || c || d);
    if(z.value == "" || e.value == 0)
    {
        window.alert("none");
    }
    else if(c.value != d.value){
        window.alert("no");
    }
    else{
        window.open("m1.html");
    }
}
function hint(){
    document.getElementById("hint").innerHTML = f.value;
}