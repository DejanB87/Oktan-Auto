export default function Korisnik({
  klijent,
  onInfoDugme,
  infoKorisnik,
  onBrisanje,
}) {
  // Prikaz koji je korisnik selektovan
  const selektovan = infoKorisnik.id === klijent.id;

  return (
    <ul className={selektovan ? "selected" : "user"}>
      <li>
        <p>{klijent.broj}.</p>
      </li>
      <li>
        <h4>{klijent.ime}</h4>
      </li>
      <li>
        <p>{klijent.registracija}</p>
      </li>
      <li>
        <p>{klijent.automobil}</p>
      </li>
      <li>
        <p>{klijent.datum}</p>
      </li>
      <li>
        <p className={klijent.zavrsen ? "green" : "red"}>
          {klijent.zavrsen ? "Zavrsen" : "U garazi"}
        </p>
      </li>
      <li>
        <div className="btn--container">
          <button
            className="btn btn--mali"
            onClick={() => onInfoDugme(klijent)}
          >
            Info
          </button>

          <button
            className="btn btn--mali btn--mali-red"
            onClick={() => onBrisanje(klijent.id)}
          >
            Izbrisi
          </button>
        </div>
      </li>
    </ul>
  );
}
