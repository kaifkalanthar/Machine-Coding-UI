import { useEffect, useState } from "react";

export type OptionsType = {
  value: string;
  label: string;
};

type AutocompleteType = {
  options: OptionsType[];
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  handleOnClose?: () => void;
  handleOnSelect?: (value: string) => void;
  handleOnInputChange?: (value: string) => void;
};

const Autocomplete = (props: AutocompleteType) => {
  const { options, handleOnInputChange, value } = props;
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    handleOnInputChange?.(query);
  };

  return (
    <div>
      <input
        type="text"
        className="px-2 py-1 border rounded-md"
        value={value || searchQuery}
        onChange={(event) => handleOnSearchQueryChange(event.target.value)}
      />

      {searchQuery && (
        <ul className="space-y-2">
          {options.map((option) => (
            <li key={option.value} className="border">
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
