function nerf_pankki() {
 var nimi = document.getElementById("name").value;
var pin = document.getElementById("pin").value;

console.log(nimi);
console.log(pingviini);


const data = {nimi, pingviini};

const options = {
  method: "post",
  headers: {
   "Content-Type":"application/json"

},

body: JSON.stringify(data)

};


fetch('/muumi', options).then(function(response) {
if(response.status == 200){
console.log("okBoomer");

}


}, function(error){
console.log(error.message);


});














}


function katsokuvat() {



}

async function nouda(){

const response = await fetch("/buffbank");
const data = await response.json();
console.log(data);

}
