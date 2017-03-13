window.addEventListener("DOMContentLoaded", start);
var Pojemnik;

function start() {
    Pojemnik = document.getElementById("polaczenie");
    Pojemnik.innerHTML += "Test1 " + navigator.connection.type;

    init();

}

function init() {


    document.addEventListener("deviceready", gotowe, false);
}


function gotowe() {


    Pojemnik.innerHTML = zwrocPolaczenie();
    Pojemnik.innerHTML += "  Test2";
}


function zwrocPolaczenie() {


    var twojePolaczenie = navigator.connection.type;

    var polaczenia = {};

    polaczenia[Connection.UNKNOWN] = "Polaczenie nieznane";
    polaczenia[Connection.ETHERNET] = "Polaczenie kablem ethernet";
    polaczenia[Connection.CELL_3G] = "Masz połączenie 3G!";
    polaczenia[Connection.CELL_4G] = "Brawo! Masz połączenie 4G";
    polaczenia[Connection.WIFI] = "Łączysz sie przez wifi";
    polaczenia[Connection.NONE] = "Nie masz połączenia";

    return polaczenia[twojePolaczenie];

}