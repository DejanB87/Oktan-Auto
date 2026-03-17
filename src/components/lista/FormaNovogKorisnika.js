import { nanoid } from "nanoid";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FormaNovogKorisnika({
  onDodajKlijenta,
  onAktivniStatus,
}) {
  const [showAddClient, setShowAddClient] = useState(false);

  const [noviBroj, setNoviBroj] = useState(3);
  const [ime, setIme] = useState("");
  const [registracija, setRegistracija] = useState("");
  const [automobil, setAutomobil] = useState("");
  const [datum, setDatum] = useState("");

  // nanoid biblioteka za generisanje id
  const id = nanoid();

  function handleSubmitKlijent(e) {
    e.preventDefault();

    const broj = noviBroj + 1;

    setNoviBroj(broj);

    const noviKlijent = {
      broj,
      ime,
      registracija,
      automobil,
      datum,
      zavrsen: false,
      id,
    };

    onAktivniStatus(noviKlijent);
    onDodajKlijenta(noviKlijent);

    toast.success("Novi korisnik je uspesno dodat!");
    // toast.error("Greska");

    setIme("");
    setRegistracija("");
    setAutomobil("");
    setDatum("");

    setShowAddClient(false);
  }

  function handleShowAddClient() {
    setShowAddClient((show) => !show);
  }

  return (
    <div className="form-container">
      {showAddClient && (
        <form className="form" onSubmit={handleSubmitKlijent}>
          <h2 className="form-head">Dodaj novog klijenta</h2>

          <div>
            <label>Vlasnik vozila</label>
            <input
              value={ime}
              onChange={(e) => setIme(e.target.value)}
              type="text"
              placeholder="Ime i prezime"
              required
            />
          </div>

          <div>
            <label>Registarska oznaka</label>
            <input
              value={registracija}
              onChange={(e) => setRegistracija(e.target.value)}
              type="text"
              placeholder="Registracija"
              required
            />
          </div>

          <div>
            <label>Marka vozila</label>
            <input
              value={automobil}
              onChange={(e) => setAutomobil(e.target.value)}
              type="text"
              placeholder="Marka"
              required
            />
          </div>

          <div>
            <label>Datum prijema</label>
            <input
              value={datum}
              onChange={(e) => setDatum(e.target.value)}
              type="text"
              placeholder="Datum"
              required
            />
          </div>

          <button className="btn btn--form">Dodaj</button>
        </form>
      )}
      <div className="btn--container">
        <button className="btn btn--novi" onClick={handleShowAddClient}>
          {showAddClient ? "Nazad" : "Dodaj klijenta"}
        </button>
      </div>
    </div>
  );
}
