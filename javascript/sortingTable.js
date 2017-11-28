function sortingTable(n) {
    //Variablen definieren
    var table, dir, rows, switching, shouldSwitch, switchcount=0, value;
    table = document.getElementById("sortierbar");
    switching = true;
    dir = "asc";
    value = "s";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("tr");
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            //erhalte die Elemente die untereinander stehen
            var x = rows[i].getElementsByTagName("td")[n];
            var y = rows[i + 1].getElementsByTagName("td")[n];
            //Prüfung, ob es sich um eine Zahl oder einen String handelt
            if (isNaN(x.innerHTML) == false) {
                value = "n";
            }
            //Umwandeln in kleinbuchstaben, dann vergleich. Fallunterscheidung auf- und absteigend
            if (dir == "asc") {
                if (value == "s") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir == "desc") {
                if (value == "s") {
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
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}