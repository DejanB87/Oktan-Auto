export default function VelikiServis({ cekiranje, setCekiranje }) {
  return (
    <div className="servis--select">
      <h2 className="naslov">Veliki Servis</h2>

      <ul className="veliki--servis">
        <li>
          <input type="checkbox" />
          <label>Motorno ulje</label>
        </li>

        <li>
          <input type="checkbox" />
          <label>Filter ulja</label>
        </li>
        <li>
          <input type="checkbox" />
          <label>Filter kabine</label>
        </li>

        <li>
          <input type="checkbox" />
          <label>Filter goriva</label>
        </li>

        <li>
          <input type="checkbox" />
          <label>Filter vazduha</label>
        </li>

        <li>
          <input type="checkbox" />
          <label>Set zupcenja</label>
        </li>

        <li>
          <input type="checkbox" />
          <label>Vodena pumpa</label>
        </li>

        <li>
          <input type="checkbox" />
          <label>Termostat</label>
        </li>

        <li>
          <input type="checkbox" />
          <label>PK razvod</label>
        </li>

        <li>
          <input type="checkbox" />
          <label>Antifriz</label>
        </li>

        <li>
          <input type="checkbox" />
          <label>Kociono ulje</label>
        </li>

        <li>
          <input
            type="checkbox"
            checked={cekiranje}
            onChange={(e) => setCekiranje(e.target.checked)}
            required
          />
          <label>Selektuj za kraj servisa</label>
        </li>
      </ul>
    </div>
  );
}
