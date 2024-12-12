import { usePetReportForm } from "../hooks/report_form/usePetReportForm";

const PetReportForm = () => {
  const {
    formData,
    regions,
    cities,
    handleChange,
    handleSubmit,
    error
  } = usePetReportForm();

  return (
    <form onSubmit={handleSubmit}>
      <h3>Report a Pet</h3>

      <label htmlFor="image">Upload</label>
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        onChange={handleChange}
        required
      />

      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        maxLength="20"
        required
      />

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        required
      >
        <option key="lost" value="lost">
          Lost
        </option>
        <option key="found" value="found">
          Found
        </option>
      </select>

      <label htmlFor="breed">Breed:</label>
      <input
        id="breed"
        name="breed"
        type="text"
        value={formData.breed}
        onChange={handleChange}
        maxLength="20"
        required
      />

      <label htmlFor="last_seen_date">Last seen on:</label>
      <input
        id="last_seen_date"
        name="last_seen_date"
        type="date"
        value={formData.last_seen_date}
        onChange={handleChange}
        required
      />

      <label htmlFor="last_seen_region">Region:</label>
      <select
        id="last_seen_region"
        name="last_seen_region"
        value={formData.last_seen_region}
        onChange={handleChange}
        required
      >
        <option
         key="display-region"
         value=""
         disabled
        >
          Select a region
        </option>
        {regions.map((r) => (
          <option 
            key={r.code} 
            value={r.name}
          >
            {r.name}
          </option>
        ))}
      </select>

      <label htmlFor="last_seen_city">City/Municipality:</label>
      <select
        id="last_seen_city"
        name="last_seen_city"
        value={formData.last_seen_city}
        onChange={handleChange}
        required
      >
        <option
         key="display-city"
         value=""
         disabled
        >
          Select a city
        </option>
        {cities.map((c) => (
          <option 
            key={c.code} 
            value=""
          >
            {c.name}
          </option>
        ))}
      </select>

      <label htmlFor="notes">Notes:</label>
      <textarea
        id="notes"
        name="notes"
        rows="4"
        cols="50"
        value={formData.notes}
        onChange={handleChange}
        maxLength="150"
      />

      <button type="submit">Report Pet</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default PetReportForm;
