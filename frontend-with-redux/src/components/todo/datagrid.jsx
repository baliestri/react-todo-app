import { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, IconButton, Stack, TextField, Tooltip } from "@mui/material";
import {
  Backspace as BackspaceIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  ToggleOff as ToggleOffIcon,
  ToggleOn as ToggleOnIcon,
} from "@mui/icons-material";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  onMarkAsDone,
  onMarkAsPending,
  onRemove,
  onSearch,
  onSearchChange,
  onSearchClear,
} from "../../common/store/actions/todo";

const TodoDataGrid = ({
  rows,
  onMarkAsDone,
  onMarkAsPending,
  onRemove,
  onSearch,
  onSearchChange,
  onSearchClear,
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
                onClick={() => onMarkAsDone(params.row.id)}
                label="Concluir"
              />
            </Tooltip>
          ) : (
            <Tooltip title="Desconcluir">
              <GridActionsCellItem
                icon={<ToggleOnIcon />}
                onClick={() => onMarkAsPending(params.row.id)}
                label="Desconcluir"
              />
            </Tooltip>
          )}
        </>,
        <Tooltip title="Remover">
          <GridActionsCellItem
            icon={<DeleteIcon />}
            onClick={() => onRemove(params.row.id)}
            label="Remover"
          />
        </Tooltip>,
      ],
    },
  ];

  useEffect(() => {
    onSearch();
  }, []);

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
              onSearch();
            }

            if (event.key === "Escape") {
              event.preventDefault();
              onSearchClear();
            }
          }}
        />
        <IconButton aria-label="pesquisar" onClick={onSearch}>
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="limpar" onClick={onSearchClear}>
          <BackspaceIcon />
        </IconButton>
      </Stack>
      <DataGrid
        rows={rows}
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

const mapStateToProps = (state) => ({
  rows: state.todo.data,
  search: state.todo.search,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onMarkAsDone,
      onMarkAsPending,
      onRemove,
      onSearchChange,
      onSearchClear,
      onSearch,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoDataGrid);
