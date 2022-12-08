import { IconButton, Tooltip } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const TodoDataGridActions = ({ value: { onRemoveClick } }) => (
  <>
    <Tooltip title="Remover">
      <IconButton onClick={onRemoveClick}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  </>
);

export default TodoDataGridActions;
