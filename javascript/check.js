/* Klasse um das eingegebene Alter zu Prüfen, um dann die entsprechenden Veranstaltungen für volljährige Mitglieder anzuzeigen*/
function ageChecker(age) {
    var exist_e = document.getElementsByClassName("Ü18"); //Speichern aller Ü18 Veranstaltungen in Variable
    if (age.value > 17 && exist_e.length < 1) {           //Prüfen, ob Volljährig und Events noch nicht angezeigt
        var new_p = document.createElement("p");          //Erstellung neues Tag
        new_p.className = "Ü18";                          //Dem neuen Tag wird eine Klasse zugewiesen (für ausblenden unten)
        var new_t = document.createTextNode("30.06.2018 Hüttenausflug"); //neuer Eintrag wird erstellt
        new_p.appendChild(new_t);                         //Eintrag mit Tag verbinden
        document.getElementById("events").appendChild(new_p); //Eintrag in Website einbinden
    } else if (age.value < 18 && exist_e.length > 0) {      //Löschung Eintrag, wenn zuerst volljährig eingegeben wurde und nun eingabe minderjährig erfolgt
        for (var i = 0; i < exist_e.length; i++) {          //Iteration durch Liste und Entfernung der jeweiligen Einträge
            exist_e[i].remove();
        }
    }
}