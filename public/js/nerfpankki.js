function nerf_pankki() {
 var nimi = document.getElementById("name").value;
var pin = document.getElementById("pin").value;

console.log(nimi);
console.log(pin);

}

function katsokuvat() {



}

async function nouda(){

const response = await fetch("/buffbank");
const data = await response.json();
console.log(data);

}
