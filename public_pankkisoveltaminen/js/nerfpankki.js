function nerf_pankki() {
 var nimi = document.getElementById("name").value;
var pingviini = document.getElementById("pingviini").value;

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


fetch('/buffbank', options).then(function(response) {
if(response.status == 200){
console.log("okBoomer");

}


}, function(error){
console.log(error.message);


});

}

async function nouda(){

const response = await fetch("/pingviini");
const data = await response.json();
console.log(data);

}
