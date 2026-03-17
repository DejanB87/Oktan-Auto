export default function MaliServis({ cekiranje, setCekiranje }) {
  return (
    <div className="servis--select">
      <h2 className="naslov">Mali Servis</h2>

      <ul className="mali--servis">
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
