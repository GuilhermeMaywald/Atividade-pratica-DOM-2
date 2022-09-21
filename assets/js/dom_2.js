let filhosBody = document.body.childElementCount;
console.log(filhosBody);


function filhosDoBody(descendentesBody){
    if(filhosBody > 5) {
        return true;
    } else {
        return false;
    }
}
console.log(filhosDoBody(filhosBody));

let paragrafos = document.querySelectorAll("p");
console.log(paragrafos);