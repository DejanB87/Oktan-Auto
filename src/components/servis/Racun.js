import Footer from "./Footer";

export default function Racun({
  selektovaniKorisnik,
  izbor,
  cenaUnesi,
  deaktivacijaDugmeta,
  onZavrsi,
}) {
  const cena = {
    cenaMali: 2000,
    cenaVeliki: 5000,
    cenaOstalo: Number(cenaUnesi),
  };

  return (
    <div className="servis--footer">
      <div className="podaci--container">
        <div className="naslov--footer">
          <img
            src="/logo/oktan-auto-logo-transparent.png"
            alt="logo-firme"
            className="logo--footer"
          />
          <h4>Oktan auto</h4>
        </div>

        <div className="podaci--firme">
          <p>Adresa: Petra Petrovica 4</p>
          <p>Mesto: Beograd</p>
          <p>Mail: oktan@test.com</p>
          <p>Tel: 060/1234567</p>
        </div>
      </div>

      <div className="sumiranje--container">
        <div className="suma--racun">
          <h4 className="suma--naslov">Zavrsni racun</h4>

          <ul className="suma--lista">
            <li>
              Ime i prezime: <span>{selektovaniKorisnik.ime}</span>
            </li>

            <li>
              Datum: <span>{selektovaniKorisnik.datum}</span>
            </li>

            <li>
              Registracija: <span>{selektovaniKorisnik.registracija}</span>
            </li>

            <li>
              Vrsta servisa:{" "}
              <span>
                {izbor === "mali" ? "Mali" : ""}
                {izbor === "veliki" ? "Veliki" : ""}
                {izbor === "ostalo" ? "Dodatni servis" : ""}
              </span>
            </li>

            <li>
              Cena bez PDV:{" "}
              <span>
                {izbor === "mali"
                  ? `${Number(cena.cenaMali).toFixed(2)} din`
                  : ""}
              </span>
              <span>
                {izbor === "veliki"
                  ? `${Number(cena.cenaVeliki).toFixed(2)} din`
                  : ""}
              </span>
              <span>
                {izbor === "ostalo"
                  ? `${Number(cena.cenaOstalo).toFixed(2)} din`
                  : ""}
              </span>
            </li>

            <li>
              PDV 20%:{" "}
              <span>
                {izbor === "mali"
                  ? `${Number(cena.cenaMali * 0.2).toFixed(2)} din`
                  : ""}
                {izbor === "veliki"
                  ? `${Number(cena.cenaVeliki * 0.2).toFixed(2)} din`
                  : ""}
                {izbor === "ostalo"
                  ? `${Number(cena.cenaOstalo * 0.2).toFixed(2)} din`
                  : ""}
              </span>
            </li>

            <li>
              Cena sa PDV:{" "}
              <span>
                {izbor === "mali"
                  ? `${Number(cena.cenaMali + cena.cenaMali * 0.2).toFixed(2)} din`
                  : ""}

                {izbor === "veliki"
                  ? `${Number(cena.cenaVeliki + cena.cenaVeliki * 0.2).toFixed(2)} din`
                  : ""}

                {izbor === "ostalo"
                  ? `${Number(cena.cenaOstalo + cena.cenaOstalo * 0.2).toFixed(2)} din`
                  : ""}
              </span>
            </li>
          </ul>
        </div>
        <button
          className="btn suma--btn"
          disabled={deaktivacijaDugmeta}
          onClick={() => onZavrsi()}
        >
          {deaktivacijaDugmeta ? "Kraj" : "Zavrsi"}
        </button>
      </div>

      <Footer />
    </div>
  );
}
