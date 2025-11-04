"use client";
import useVicinity from "@/app/hooks/useVicinity";

const Location = ({
  addClass,
  labelClass,
  visible,
}: {
  addClass: string;
  labelClass: string;
  visible: boolean;
}) => {
  const { handleVicinity, landmarks } = useVicinity();
  return (
    <>
      <div className="w-full">
        {visible && (
          <label className={`${labelClass}`} htmlFor="region">
            Region
          </label>
        )}
        <select
          className={`${addClass} border border-gray-300 rounded-md w-full focus:outline-primary`}
          id="Region"
          title="Region"
          onChange={(e) => handleVicinity(e)}
          autoComplete="on"
          required
        >
          <option value="default">Select Location</option>
          <option value="akoka">Akoka (UNILAG)</option>
          <option value="idi-araba">Idi-Araba (CMUL)</option>
        </select>
      </div>
      {landmarks.length !== 0 && (
        <div className="w-full">
          {visible && (
            <label className={`${labelClass}`} htmlFor="vicinity">
              Vicinity
            </label>
          )}
          <select
            className={`${addClass} border border-gray-300 rounded-md w-full focus:outline-primary`}
            id="Vicinity"
            title="Vicinity"
            autoComplete="on"
            required
          >
            {landmarks.map((landmark, index) => (
              <option key={index} value={landmark}>
                {landmark}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default Location;
