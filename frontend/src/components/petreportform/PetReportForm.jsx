import { usePetReportForm } from "../../hooks/report_form/usePetReportForm";
import { ProgressBar } from "./ProgressBar";

const PetReportForm = () => {
  const {
    formData,
    regions,
    cities,
    fileInputRef,
    handleChange,
    formStatus,
    handleSubmit,
    error
  } = usePetReportForm();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Report a Pet</h3>

        <label htmlFor="image">Upload</label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          ref={fileInputRef}
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
          key="dp-region"
          value=""
          disabled
          >
            Select a region
          </option>
          {regions
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((r) => (
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
          key="dp-city"
          value=""
          disabled
          >
            Select a region first
          </option>
          {cities
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((c) => (
              <option 
                key={c.code} 
                value={c.name}
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

        <button 
          type="submit"
          disabled={formStatus === "submitting"}>
            Report Pet
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <ProgressBar />
      {formStatus === "completed" && (
        <p>Your report has been submitted.</p>
      )}
    </div>
  );
};

export default PetReportForm;
