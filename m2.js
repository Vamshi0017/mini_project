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
const form = document.getElementById("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
localStorage.setItem("username",b.value);
localStorage.setItem("password",c.value);
localStorage.setItem("hint",f.value);
window.location.href = "m1.js";
})
