import { Breadcrumbs, Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" pl="2rem" pr="2rem">
        <Typography color="text.primary">{title}</Typography>
        <Typography color="text.secondary">{subtitle}</Typography>
      </Breadcrumbs>
      <hr />
    </>
  );
};

export default Header;
