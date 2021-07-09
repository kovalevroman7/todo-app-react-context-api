import React, { useContext } from "react";

import { FilterContext } from "../FilterContext";

export const Filter = () => {
  const { filter, setFilter } = useContext(FilterContext);
  return (
    <div>
      <label for="isComplete">isComplete</label>
      <input
        id="isComplete"
        type="checkbox"
        checked={filter.isComplete}
        onChange={(e) => {
          setFilter({ isComplete: e.target.checked });
        }}
      />
    </div>
  );
};
