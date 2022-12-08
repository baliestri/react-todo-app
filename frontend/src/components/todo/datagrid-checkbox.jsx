import { Checkbox, Tooltip } from "@mui/material";
import { useState } from "react";

const DataGridCheckbox = ({ value: { checked, onMarkChange } }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const onChange = () => {
    setIsChecked(!isChecked);
    onMarkChange(!isChecked);
  };

  return (
    <Tooltip title={isChecked ? "Sim" : "Não"}>
      <Checkbox
        checked={isChecked}
        onChange={onChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </Tooltip>
  );
};

export default DataGridCheckbox;
