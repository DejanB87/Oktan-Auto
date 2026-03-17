import { useState } from "react";
import OdabirServisa from "./OdabirServisa";
import MaliServis from "./MaliServis";
import VelikiServis from "./VelikiServis";
import DodatniServis from "./DodatniServis";
import Racun from "./Racun";
import ZavrsenServis from "./ZavrsenServis";
import toast from "react-hot-toast";

export default function PregledServisa({
  selektovaniKorisnik,
  lista,
  setLista,
  info,
}) {
  const vrsta = <OdabirServisa />;

  const [izbor, setIzbor] = useState(vrsta);
  const [vrstaGoriva, setVrstaGoriva] = useState("");
  const [kubikaza, setKubikaza] = useState("");
  const [predjeniKm, setPredjeniKm] = useState("");
  const [kmDoSledeceg, setKmDoSledeceg] = useState("");
  const [cekiranje, setCekiranje] = useState(false);
  const [cenaUnesi, setCenaUnesi] = useState("");

  // Ovo je provera da li ce biti checkbox ili textarea varijanta
  const proveraRadiAktivacijeDugmeta = !cekiranje ? cenaUnesi : cekiranje;

  const deaktiviranoDugme =
    selektovaniKorisnik.zavrsen ||
    !selektovaniKorisnik.automobil ||
    !izbor ||
    !vrstaGoriva ||
    !kubikaza ||
    !predjeniKm ||
    !kmDoSledeceg ||
    !proveraRadiAktivacijeDugmeta;

  // Funkcija za kraj servisa

  function handleZavrsenServis() {
    setLista(() =>
      lista.map((item) =>
        item.id === selektovaniKorisnik.id ? { ...item, zavrsen: true } : item,
      ),
    );

    toast.success("Servis je zavrsen");

    setIzbor("");
    setVrstaGoriva("");
    setKubikaza("");
    setPredjeniKm("");
    setKmDoSledeceg("");
  }

  // Funkcija za odabir vrste servisa

  function handlePromenaServisa() {
    switch (izbor) {
      case "vrsta":
        return <OdabirServisa />;
      case "mali":
        return <MaliServis cekiranje={cekiranje} setCekiranje={setCekiranje} />;
      case "veliki":
        return (
          <VelikiServis cekiranje={cekiranje} setCekiranje={setCekiranje} />
        );
      case "ostalo":
        return (
          <DodatniServis cenaUnesi={cenaUnesi} setCenaUnesi={setCenaUnesi} />
        );
      default:
        return <OdabirServisa />;
    }
  }

  return (
    <div className="servis">
      <div className="servis--naslov">
        <h2>Pregled servisa</h2>
      </div>
      <div className="servis--podaci">
        <div className="servis--model">
          <p>Model automobila</p>
          <p className={!selektovaniKorisnik.automobil ? "red" : "green"}>
            {!selektovaniKorisnik.automobil
              ? "Kliknite na INFO"
              : selektovaniKorisnik.automobil}
          </p>
        </div>

        <div className="servis--grid">
          <div className="servis--km">
            <label>Vrsta servisa:</label>

            <select
              className="input--container"
              value={izbor}
              onChange={(e) => setIzbor(e.target.value)}
              required
            >
              <option value="vrsta">Izaberi</option>
              <option value="mali">Mali servis</option>
              <option value="veliki">Veliki servis</option>
              <option value="ostalo">Drugo</option>
            </select>
          </div>

          <div className="servis--km">
            <label className="label--container">Vrsta goriva:</label>

            <select
              className="input--container"
              value={vrstaGoriva}
              onChange={(e) => setVrstaGoriva(e.target.value)}
              required
            >
              <option value="/">Izaberi</option>
              <option value="benzin">Benzin</option>
              <option value="dizel">Dizel</option>
              <option value="hibrid">Hibrid</option>
            </select>
          </div>

          <div className="servis--km">
            <label className="label--container">Kubikaza:</label>
            <div className="input--container">
              <input
                type="number"
                placeholder="cc"
                value={kubikaza}
                onChange={(e) => setKubikaza(e.target.value)}
                required
              />
              <span>cc</span>
            </div>
          </div>

          <div className="servis--km">
            <label className="label--container">Broj predjenih km:</label>
            <div className="input--container">
              <input
                type="number"
                placeholder="km"
                value={predjeniKm}
                onChange={(e) => setPredjeniKm(e.target.value)}
                required
              />
              <span>km</span>
            </div>
          </div>

          <div className="servis--km">
            <label className="label--container">Km do sledeceg servisa:</label>
            <div className="input--container">
              <input
                type="number"
                placeholder="km"
                value={kmDoSledeceg}
                onChange={(e) => setKmDoSledeceg(e.target.value)}
                required
              />
              <span>km</span>
            </div>
          </div>
        </div>
      </div>

      {selektovaniKorisnik.zavrsen ? <ZavrsenServis /> : handlePromenaServisa()}

      <Racun
        selektovaniKorisnik={selektovaniKorisnik}
        lista={lista}
        izbor={izbor}
        deaktivacijaDugmeta={deaktiviranoDugme}
        cenaUnesi={cenaUnesi}
        onZavrsi={handleZavrsenServis}
        info={info}
      />
    </div>
  );
}
