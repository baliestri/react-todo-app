import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import {
  Search as SearchIcon,
  Backspace as BackspaceIcon,
} from "@mui/icons-material";

import TodoDataGridActions from "./datagrid-actions";
import TodoDataGridCheckbox from "./datagrid-checkbox";

const TodoDataGrid = ({
  rows,
  onSearchClick,
  onCleanClick,
  onSearchChange,
  search,
}) => {
  const [pageSize, setPageSize] = useState(5);

  const columns = [
    {
      field: "id",
      headerName: "Id",
      hide: true,
    },
    {
      field: "description",
      flex: 1,
      headerName: "Descrição",
      headerAlign: "center",
    },
    {
      field: "createdAt",
      flex: 1,
      headerName: "Data de criação",
      headerAlign: "center",
      type: "date",
      valueFormatter: ({ value }) =>
        new Date(value).toLocaleDateString("pt-BR"),
    },
    {
      field: "done",
      flex: 1,
      headerName: "Concluído",
      headerAlign: "center",
      type: "boolean",
      renderCell: TodoDataGridCheckbox,
      sortable: false,
    },
    {
      field: "actions",
      flex: 1,
      headerName: "Ações",
      headerAlign: "center",
      renderCell: TodoDataGridActions,
      sortable: false,
      cellClassName: "cell--actions",
    },
  ];

  return (
    <Box sx={{ padding: "2rem" }}>
      <Stack direction="row" spacing={2} mb={2}>
        <TextField
          label="Pesquisar"
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
          value={search}
          onChange={onSearchChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onSearchClick();
            }

            if (event.key === "Escape") {
              event.preventDefault();
              onCleanClick();
            }
          }}
        />
        <IconButton aria-label="pesquisar" onClick={onSearchClick}>
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="limpar" onClick={onCleanClick}>
          <BackspaceIcon />
        </IconButton>
      </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        initialState={{
          sorting: {
            sortModel: [{ field: "createdAt", sort: "desc" }],
          },
        }}
        sx={{
          "& .cell--actions": {
            display: "flex",
            justifyContent: "center",
          },
        }}
        disableColumnMenu={true}
        autoHeight={true}
      />
    </Box>
  );
};

export default TodoDataGrid;
