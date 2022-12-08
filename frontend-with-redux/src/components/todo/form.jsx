import { Box, IconButton, Stack, TextField } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const TodoForm = ({}) => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Stack direction="row" spacing={2} mb={2}>
        <TextField
          label="Descrição"
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
        />
        <IconButton aria-label="adicionar" onClick={() => {}}>
          <AddIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default TodoForm;
