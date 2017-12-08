function ageChecker(age) {
    var exist_e = document.getElementsByClassName("Ü18");
    if (age.value > 17 && exist_e.length<1) {
        var new_p = document.createElement("p");
        new_p.className="Ü18";
        var new_t = document.createTextNode("30.06.2018 Hüttenausflug");
        new_p.appendChild(new_t);
        document.getElementById("events").appendChild(new_p);
    } else if (age.value < 18 && exist_e.length>0){
        for(var i=0; i<exist_e.length;i++){
            exist_e[i].remove();
        }
    }
}