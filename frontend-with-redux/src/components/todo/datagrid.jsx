import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, IconButton, Stack, TextField, Tooltip } from "@mui/material";
import {
  Backspace as BackspaceIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  ToggleOff as ToggleOffIcon,
  ToggleOn as ToggleOnIcon,
} from "@mui/icons-material";

const TodoDataGrid = ({}) => {
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
      sortable: false,
    },
    {
      field: "actions",
      type: "actions",
      flex: 1,
      sortable: false,
      getActions: (params) => [
        <>
          {!params.row.done ? (
            <Tooltip title="Concluir">
              <GridActionsCellItem
                icon={<ToggleOffIcon />}
                onClick={() => {}}
                label="Concluir"
              />
            </Tooltip>
          ) : (
            <Tooltip title="Desconcluir">
              <GridActionsCellItem
                icon={<ToggleOnIcon />}
                onClick={() => {}}
                label="Desconcluir"
              />
            </Tooltip>
          )}
        </>,
        <Tooltip title="Remover">
          <GridActionsCellItem
            icon={<DeleteIcon />}
            onClick={() => {}}
            label="Remover"
          />
        </Tooltip>,
      ],
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
        />
        <IconButton aria-label="pesquisar" onClick={() => {}}>
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="limpar" onClick={() => {}}>
          <BackspaceIcon />
        </IconButton>
      </Stack>
      <DataGrid
        rows={[]}
        columns={columns}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        initialState={{
          sorting: {
            sortModel: [{ field: "createdAt", sort: "desc" }],
          },
        }}
        disableColumnMenu={true}
        autoHeight={true}
      />
    </Box>
  );
};

export default TodoDataGrid;
