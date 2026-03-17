import NemaListe from "./NemaListe";

export default function ListaKorisnika({ prikazListe }) {
  return (
    <div className="list-container">
      <ul className="description">
        <li>Br</li>
        <li>Ime i prezime</li>
        <li>Registracija</li>
        <li>Model</li>
        <li>Datum</li>
        <li>Status</li>
      </ul>
      <ul className="list">
        {prikazListe.length === 0 ? <NemaListe /> : prikazListe}
      </ul>
    </div>
  );
}
