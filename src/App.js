import { useState } from "react";

import Naslov from "./components/naslov/Naslov";
import ListaKorisnika from "./components/lista/ListaKorisnika";
import FormaNovogKorisnika from "./components/lista/FormaNovogKorisnika";
import PregledServisa from "./components/servis/PregledServisa";
import toast, { Toaster } from "react-hot-toast";
import Korisnik from "./components/lista/Korisnik";

const initialList = [
  {
    broj: 1,
    ime: "Dejan Bogosavljevic",
    registracija: "JA 046CL",
    automobil: "Audi 100",
    datum: "14.02.2026",
    zavrsen: true,
    id: 1656786,
  },
  {
    broj: 2,
    ime: "Sanja Stosic",
    registracija: "JA 453EE",
    automobil: "Reno Kaptur",
    datum: "24.02.2026",
    zavrsen: false,
    id: 2456545,
  },
  {
    broj: 3,
    ime: "Petar Petrovic",
    registracija: "BG 01128GI ",
    automobil: "Fiat Punto",
    datum: "03.02.2026",
    zavrsen: false,
    id: 386878,
  },
];

// const initialList = [];

export default function App() {
  const [lista, setLista] = useState(initialList);
  const [selektovaniKorisnik, setSelektovaniKorisnik] = useState("");

  const prikazListe = lista.map((item) => (
    <Korisnik
      klijent={item}
      key={item.id}
      infoKorisnik={selektovaniKorisnik}
      onInfoDugme={handleInfo}
      onBrisanje={handleBrisanjeKorisnika}
    />
  ));

  // Dodavanje novog korisnika

  function handleDodajKlijenta(client) {
    setLista((lista) => [...lista, client]);
  }

  // Prikaz podataka za info dugme

  function handleInfo(client) {
    setSelektovaniKorisnik(client);
  }

  // Brisanje korisnika

  function handleBrisanjeKorisnika(id) {
    const listaNakonBrisanja = lista.filter((client) => client.id !== id);

    alert("Da li zaista zelite da obrisete korisnika?");

    toast.success("Korisnik je uspesno obrisan!");

    setLista(listaNakonBrisanja);
  }

  return (
    <div className="container">
      <div className="app">
        <Naslov />
        <ListaKorisnika
          lista={lista}
          selektovaniKorisnik={selektovaniKorisnik}
          onInfoKlik={handleInfo}
          prikazListe={prikazListe}
        />
        <FormaNovogKorisnika
          onDodajKlijenta={handleDodajKlijenta}
          onAktivniStatus={handleInfo}
        />
        <PregledServisa
          selektovaniKorisnik={selektovaniKorisnik}
          lista={lista}
          setLista={setLista}
          info={handleInfo}
        />

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 5000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: " #dedede",
              color: "#429c2b",
            },
          }}
        />
      </div>
    </div>
  );
}
