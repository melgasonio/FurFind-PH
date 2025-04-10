import { usePetReportForm } from "../../hooks/report_form/usePetReportForm";
import { ProgressBar } from "./ProgressBar";

import NormalButton from "../buttons/NormalButton";

import avatar from "../../assets/report_pet/cat-avatar.jpg"

const PetReportForm = () => {
  const {
    formData,
    regions,
    cities,
    handleChange,
    formStatus,
    handleSubmit,
    error,
    imgURL
  } = usePetReportForm();

  console.log(imgURL)

  return (
    <div className="">
      <form className="bg-white-200 flex flex-col gap-[var(--size-xsm)] px-[var(--size-xsm)] py-[var(--size-sm)] rounded-[2.5px]" onSubmit={handleSubmit}>
        <div className="flex flex-col text-black-500 font-size-[12px] gap-[8px] mb-[24px]">
          <h3 className="mb-[12px] text-black-700 font-size-[14px] font-semibold">Pet Details</h3>
          <div className="flex flex-col items-center">
          <div
            className="h-[180px] w-[180px] flex flex-col justify-center items-center border-1 border-dashed bg-cover bg-center mb-[8px] rounded-[4px]"
            style = {{ backgroundImage: `url(${imgURL || avatar})` }}
          >
          </div>
          <label
            className="w-[180px] text-center cursor-pointer font-size-[10px] border-1 border-black-500 p-[4px] rounded-[5px] hover:bg-black-100"
            htmlFor="image">
              Add Photo*
          </label>
          </div>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
            className="hidden"
          />
          <div className="flex flex-col gap-[4px]">
            <label htmlFor="status" className="text-black-600">Status*</label>
            <div>
              <input
                type="radio"
                name="status"
                id="Lost"
                value={"Lost"}
                onChange={handleChange}
                className="mr-[2px] cursor-pointer accent-coral-300"
              />
              <label
                htmlFor="Lost"
                className="mr-[6px]">
                Lost
              </label>
              <input
                type="radio"
                name="status"
                id="Found"
                value={"Found"}
                onChange={handleChange}
                className="mr-[2px] cursor-pointer accent-coral-300"
              />
              <label
                htmlFor="Found"
                className="">
                Found
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <label htmlFor="name" className="text-black-600">Name*</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              maxLength="20"
              required
              className="cursor-text border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <label htmlFor="breed" className="text-black-600">Breed*</label>
            <input
              id="breed"
              name="breed"
              type="text"
              value={formData.breed}
              onChange={handleChange}
              maxLength="20"
              required
              className="cursor-text border-1 border-black-300 rounded-[5px] py-[4px] px-[8px] mb-[20px]"
            />
          </div>
          <p className="mb-[12px] text-black-700 font-size-[14px] font-semibold">Last Seen Information</p>
          <div className="flex flex-col gap-[4px]">
            <label
              htmlFor="last_seen_region"
              className="text-black-600">
                Region*
            </label>
            <select
              id="last_seen_region"
              name="last_seen_region"
              value={formData.last_seen_region}
              onChange={handleChange}
              required
              className="cursor-pointer border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
            >
              <option
              key="dp-region"
              value=""
              disabled
              >
                -- Choose a Region --
              </option>
              {regions
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((r) => (
                  <option
                    key={r.code}
                    value={r.name}
                    className="cursor-pointer"
                  >
                    {r.name}
                  </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-[4px]">
            <label
            htmlFor="last_seen_city"
            className="text-black-600">
              City* (Choose a Region first)
            </label>
            <select
              id="last_seen_city"
              name="last_seen_city"
              value={formData.last_seen_city}
              onChange={handleChange}
              required
              className="cursor-pointer border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
            >
              <option
              key="dp-city"
              value=""
              disabled
              >
                -- Choose a City --
              </option>
              {cities
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((c) => (
                  <option
                    key={c.code}
                    value={c.name}
                    className="cursor-pointer"
                  >
                    {c.name}
                  </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-[4px]">
            <label
            htmlFor="last_seen_date"
            className="text-black-600">
              Date*
            </label>
            <input
              id="last_seen_date"
              name="last_seen_date"
              type="date"
              value={formData.last_seen_date}
              onChange={handleChange}
              className="cursor-pointer border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <label
            htmlFor="notes"
            className="text-black-600">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              cols="50"
              value={formData.notes}
              onChange={handleChange}
              maxLength="150"
              className="cursor-text border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
            />
          </div>
        </div>
        <div className="flex items-stretch">
          <NormalButton 
            innerHTML={"Report Pet"}
            type="submit" 
            disabled={formStatus === "submitting"}
            className="flex-1"
          />
        </div>
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
