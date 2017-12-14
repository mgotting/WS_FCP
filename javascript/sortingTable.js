/*Klasse zur Sortierung von Tabellen, die Zahlen und Buchstaben enthalten (Bubblesort). Angelehnt an W3-Tutorial*/
function sortingTable(n) {
    //Variablen definieren
    var table = document.getElementById("sortierbar");
    var shouldSwitch, switchcount = 0;
    var switching = true;
    var dir = "asc";
    var value = "s";
    while (switching) {
        switching = false;
        var rows = table.getElementsByTagName("tr");
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            //erhalte die Elemente die untereinander stehen
            var x = rows[i].getElementsByTagName("td")[n];
            var y = rows[i + 1].getElementsByTagName("td")[n];
            //Prüfung, ob es sich um eine Zahl oder einen String handelt
            if (isNaN(x.innerHTML) === false) {
                value = "n";
            }
            //Wenn String, dann umwandeln in Kleinbuchstaben, dann vergleich. Fallunterscheidung auf- und absteigend
            if (dir === "asc") {
                if (value === "s") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;    //Boolean Werte sollen getauscht werden auf true setzen
                        break;
                    }
                } else { //Wenn es sich um eine Zahl handelt
                    if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir === "desc") {
                if (value === "s") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        //Wird ausgeführt, wenn Elemente getauscht werden sollen
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            //Sortierrichtung umkehren, sofern noch nicht sortiert wurde
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}