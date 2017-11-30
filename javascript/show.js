function show(){
    if(document.getElementById("sichtbarkeit").innerHTML=="Veranstaltungen anzeigen") {
        document.getElementById("sichtbarkeit").innerHTML = "Veranstaltungen ausblenden";
        document.getElementById('events').style.display = 'block';
    } else {
        document.getElementById("sichtbarkeit").innerHTML = "Veranstaltungen anzeigen";
        document.getElementById('events').style.display = 'none';
    }
}
