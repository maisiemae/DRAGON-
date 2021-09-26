var ele = document.body.querySelector(".looper");

var dragonHealth = 10;
var userHealth= 5;
//while condition will go until the condition is false

while(dragonHealth > 0 && userHealth > 0){
    var damage = Number(prompt("how many times u gonna hit the dragon? u can hit up to 5."));
    randomDamage = Math.floor(Math.random()*damage)+1;
    if(randomDamage > 5){
        dragonHealth= dragonHealth -1;
        //alert("dragon health: " + dragonHealth);
    }else{
        dragonHealth = dragonHealth - randomDamage;
        //alert("dragon health: " + dragonHealth);
}
    //dragon dies
    if(dragonHealth>0) {
        dragonRandomDamage = Math.floor(Math.random() * 2) + 1;

        userHealth = userHealth - dragonRandomDamage;
        alert('userHealth:' + userHealth);
        //stop when dragonHealth is 0
        alert('dragonHealth: ' + dragonHealth);
    }


}
if(userHealth <=0){
    userHealth=0;
    ele.innerHTML="dragon wins!"+"user health="+ userHealth + ",dragon health="+dragonHealth;

} else {
    ele.innerHTML = "you win!" + " user health=" + userHealth + ", dragon health" + dragonHealth;
}