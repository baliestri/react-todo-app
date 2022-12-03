import { Box, IconButton, Stack, TextField } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const TodoForm = ({ description, onAddClick, onDescriptionChange }) => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Stack direction="row" spacing={2} mb={2}>
        <TextField
          label="Descrição"
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
          value={description}
          onChange={onDescriptionChange}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onAddClick();
            }

            if (event.key === "Escape") {
              event.preventDefault();
              event.target.value = "";
            }
          }}
        />
        <IconButton aria-label="adicionar" onClick={onAddClick}>
          <AddIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default TodoForm;
