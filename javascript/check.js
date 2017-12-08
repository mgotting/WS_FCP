function ageChecker(age) {
    if (age.value > 17) {
        var new_p = document.createElement("p");
        var new_t = document.createTextNode("30.06.2018 Hüttenausflug");
        new_p.appendChild(new_t);
        document.getElementById("events").appendChild(new_p);
    }
}