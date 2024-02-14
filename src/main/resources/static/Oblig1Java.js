const billetListe = [];
function visbilletListe() {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let b of billetListe) {
        ut += "<tr>";
        ut += "<td>" + b.Film + "</td><td>" + b.Antall + "</td><td>" + b.Fornavn + "</td> " +
            "<td>" + b.Etternavn + "</td><td>"
            + b.Telefonnr + "</td>" +
            "<td>" + b.Epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("billetListe").innerHTML = ut;
}
function registrer() {
    const Film = document.getElementById("Film").value;
    const Antall = Number(document.getElementById("Antall").value);
    const Fornavn = document.getElementById("Fornavn").value;
    const Etternavn = document.getElementById("Etternavn").value;
    const Telefonnr = document.getElementById("Telefonnr").value;
    const Epost = document.getElementById("Epost").value;
    let isValid = true;

    if (Film === "") {
        document.getElementById("Filmcheck").textContent = "Velg en film";
        isValid = false;
    } else{
        document.getElementById("Filmcheck").textContent="";
    }
    if (isNaN(Antall) || Antall < 1) {
        document.getElementById("Antallcheck").textContent = "Antall må være et tall større enn 0";
        isValid = false;
    }else {
        document.getElementById("Antallcheck").textContent = "";
    }
    if (Fornavn === "") {
        document.getElementById("Fornavncheck").textContent = "Fyll ut fornavn";
        isValid = false;
    }else {
        document.getElementById("Fornavncheck").textContent = "";
    }
    if (Etternavn === "") {
        document.getElementById("Etternavncheck").textContent = "Fyll ut etternavn";
        isValid = false;
    }else {
        document.getElementById("Etternavncheck").textContent = "";
    }
    if (!/^[0-9]{8}$/.test(Telefonnr)) {
        document.getElementById("Tlfcheck").textContent = "Telefonnummeret må være 8 siffer";
        isValid = false;
    }else {
        document.getElementById("Tlfcheck").textContent = "";
    }
    if (!/\S+@\S+\.\S+/.test(Epost)) {
        document.getElementById("Epostcheck").textContent = "Skriv inn en gyldig e-postadresse";
        isValid = false;
    }else {
        document.getElementById("Epostcheck").textContent = "";
    }

    if (isValid) {

        const buy = {
            Film: Film,
            Antall: Antall,
            Fornavn: Fornavn,
            Etternavn: Etternavn,
            Telefonnr: Telefonnr,
            Epost: Epost,
        };
        billetListe.push(buy);
        document.getElementById("Film").value = "";
        document.getElementById("Antall").value = "";
        document.getElementById("Fornavn").value = "";
        document.getElementById("Etternavn").value = "";
        document.getElementById("Telefonnr").value = "";
        document.getElementById("Epost").value = "";
        visbilletListe()
    }

}
function slett() {
    billetListe.splice(0, billetListe.length);
    document.getElementById("billetListe").innerHTML = "";
}