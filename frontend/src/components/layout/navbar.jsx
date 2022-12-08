import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Assignment as AssignmentIcon } from "@mui/icons-material";

const Navbar = () => {
  const pages = [
    {
      name: "Tarefas",
      path: "#/todos",
    },
    {
      name: "Sobre",
      path: "#/about",
    },
  ];

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AssignmentIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ToDo
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              verticalAlign: "middle",
              mt: 0.5,
              flex: 1,
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.path}
                variant="button"
                sx={{
                  color: "inherit",
                  fontFamily: "Roboto",
                  mr: 2,
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
