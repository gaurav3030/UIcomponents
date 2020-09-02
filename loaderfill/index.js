
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function changeText() {
    for (let i = 1; i <= 10; i++) {
      await sleep(500);
      document.getElementById("number").textContent = 10 * i + "%";
    }
  }



var path = "0% 100%";
var rad = Math.PI /2;
for(let i=0;i<=20;i++){
    var point = "";
    var x = i*5;
    var y = Math.sin(rad);
    y ++;
    y*=50;
    point = ", "+x+ "% " + y+ "%";
    path +=point;
    rad += (Math.PI /10)
}
path+= ",100% 100%"
changeText();
console.log(path);
document.getElementById("wave").style.clipPath="polygon("+path+")";
console.log("All is well");
