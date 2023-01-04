import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import CustomIconButton from "components/common/CustomIconButton";
import CutsomButton from "components/common/CutsomButton";
import ControlledTextField from "components/Controlled/ControlledTextField";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Box
      sx={{
        height: "72px",
        backgroundColor: "#ffffff",
        padding: "0 20px",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between" sx={{ height: "100%" }}>
        <Grid item xs={2}>
          <Link to={"/"}>
            <img src="/images/logo.png" height={"42px"} />
          </Link>
        </Grid>
        <Grid item xs={6} display={{ xs: "none", md: "unset" }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>Categories</Typography>
            <ControlledTextField state={searchQuery} setState={setSearchQuery} placeholder={"serach"} />
          </Stack>
        </Grid>
        <Grid item xs={4} display={{ xs: "none", md: "unset" }}>
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <CutsomButton title="Log in" />
            <CutsomButton title="Sign up" variant="contained" sx={{ boxShadow: "0 0 0 0 " }} />
            <CustomIconButton />
          </Stack>
        </Grid>
        <IconButton sx={{ display: { md: "none" } }}>
          <MoreVertIcon />
        </IconButton>
      </Grid>
    </Box>
  );
};

export default NavBar;
