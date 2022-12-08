import { Box, IconButton, Stack, TextField } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { onAdd, onDescriptionChange } from "../../common/store/actions/todo";

const TodoForm = ({ description, onAdd, onDescriptionChange }) => {
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
              onAdd();
            }

            if (event.key === "Escape") {
              event.preventDefault();
              event.target.value = "";
            }
          }}
        />
        <IconButton aria-label="adicionar" onClick={onAdd}>
          <AddIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  description: state.todo.description,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ onAdd, onDescriptionChange }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
