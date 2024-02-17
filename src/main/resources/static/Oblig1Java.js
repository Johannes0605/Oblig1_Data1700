// Definerer en array for å lagre listen over billetter
const billetListe = [];

// Funksjon for å vise billettlisten på nettsiden
function visBillettListe() {
    // Henter container-elementet for billettlisten
    const container = document.getElementById("billet-liste-container");
    container.innerHTML = ""; // Tømmer eksisterende innhold

    // Sjekker om det ikke er noen billetter bestilt ennå
    if (billetListe.length === 0) {
        container.textContent = "Ingen billetter er bestilt ennå.";
        return;
    }

    // Oppretter et tabell-element for å vise billettlisten
    const table = document.createElement("table");

    // Oppretter overskriftsrad for tabellen
    const headerRow = table.insertRow();
    // Definerer kolonneoverskrifter
    ["Film", "Antall", "Fornavn", "Etternavn", "Telefonnummer", "E-post"].forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    // Går gjennom hver billett i billettlisten
    billetListe.forEach(billett => {
        // Oppretter en ny rad for hver billett
        const row = table.insertRow();
        // Fyller cellene med informasjon om billettene
        ["film", "antall", "fornavn", "etternavn", "telefonnummer", "epost"].forEach(prop => {
            const cell = row.insertCell();
            cell.textContent = billett[prop];
        });
    });

    // Legger til tabellen i containeren
    container.appendChild(table);
}

// Funksjon for å registrere en ny billett
function registrerBillett() {
    // Henter verdier fra skjemaet
    const film = document.getElementById("film").value;
    const antall = parseInt(document.getElementById("antall").value);
    const fornavn = document.getElementById("fornavn").value.trim();
    const etternavn = document.getElementById("etternavn").value.trim();
    const telefonnummer = document.getElementById("telefonnummer").value.trim();
    const epost = document.getElementById("epost").value.trim();

    let erGyldig = true; // Flag for å spore skjema validering

    // Utfører skjema validering og viser feilmeldinger ved behov
    if (!film || film === "Velg en film") {
        document.getElementById("filmcheck").textContent = "Vennligst velg en film.";
        erGyldig = false;
    } else {
        document.getElementById("filmcheck").textContent = "";
    }
    if (isNaN(antall) || antall < 1) {
        document.getElementById("antallcheck").textContent = "Antall må være et tall større enn 0.";
        erGyldig = false;
    } else {
        document.getElementById("antallcheck").textContent = "";
    }
    if (!fornavn) {
        document.getElementById("fornavncheck").textContent = "Vennligst skriv inn ditt fornavn.";
        erGyldig = false;
    } else {
        document.getElementById("fornavncheck").textContent = "";
    }
    if (!etternavn) {
        document.getElementById("etternavncheck").textContent = "Vennligst skriv inn ditt etternavn.";
        erGyldig = false;
    } else {
        document.getElementById("etternavncheck").textContent = "";
    }
    if (!telefonnummer.match(/^\d{8}$/)) {
        document.getElementById("telefonnummercheck").textContent = "Telefonnummeret må være 8 siffer.";
        erGyldig = false;
    } else {
        document.getElementById("telefonnummercheck").textContent = "";
    }
    if (!epost.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById("epostcheck").textContent = "Vennligst skriv inn en gyldig e-postadresse.";
        erGyldig = false;
    } else {
        document.getElementById("epostcheck").textContent = "";
    }

    // Hvis skjemaet er gyldig, legg til billetten i listen
    if (erGyldig) {
        billetListe.push({ film, antall, fornavn, etternavn, telefonnummer, epost });
        document.getElementById("billet-skjema").reset(); // Tilbakestill skjemafeltene
        visBillettListe(); // Oppdater visningen
    }
}

// Funksjon for å fjerne alle billetter fra listen
function slettAlleBilletter() {
    billetListe.length = 0; // Tømmer arrayen
    visBillettListe(); // Oppdater visning
}
