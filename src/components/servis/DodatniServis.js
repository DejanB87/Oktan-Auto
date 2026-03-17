export default function DodatniServis({ cenaUnesi, setCenaUnesi }) {
  return (
    <div className="servis--select">
      <h2 className="naslov">Ostalo</h2>
      <div className="ostalo">
        <label>Ukoliko je bilo drugih popravki molimo upisite detalje:</label>
        <textarea
          className="ostalo--text"
          id="komentar"
          name="komentar"
          rows="5"
          cols="30"
          placeholder="Unesite komentar..."
          maxLength="100"
        ></textarea>
        <div className="cena--ostalo">
          <label>Za odredjenu popravku upisite cenu:</label>
          <div>
            <input
              type="number"
              placeholder="din"
              value={cenaUnesi}
              onChange={(e) => setCenaUnesi(e.target.value)}
              required
            />{" "}
            <span>din</span>
          </div>
        </div>
      </div>
    </div>
  );
}
