import { useEffect, useState } from 'react';
import { Trl } from 'types';

interface IDropdown {
  trls: Trl[];
  handleTrlChange: (value: Trl) => void;
  initialValue: Trl;
}
const Dropdown = ({ trls, handleTrlChange, initialValue }: IDropdown) => {
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const handleChange = (event: { target: { value: string } }) => {
    const selectedValue = JSON.parse(event.target.value);
    setSelectedOption(selectedValue);
    handleTrlChange(selectedValue);
  };

  useEffect(() => {
    setSelectedOption(initialValue);
  }, [initialValue]);

  return (
    <div className="w-full   p-6 ">
      <label className="block mb-2 text-sm font-bold" htmlFor="dropdown">
        Edit TRL
      </label>
      <select
        id="dropdown"
        value={JSON.stringify(selectedOption)}
        onChange={handleChange}
        className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm appearance-none"
      >
        {trls.map((e: Trl) => {
          return (
            <option
              className="w-full"
              value={JSON.stringify({ id: e.id, trl: e.name })}
              key={e.id}
              disabled={Number(e.id) === initialValue.id}
            >
              {e.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
