import { Box, Grid, Stack, Typography } from "@mui/material";
import CustomIconButton from "components/common/CustomIconButton";
import CutsomButton from "components/common/CutsomButton";
import ControlledTextField from "components/Controlled/ControlledTextField";
import { useState } from "react";

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
          <img src="/images/logo.png" height={"42px"} />
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>Categories</Typography>
            <ControlledTextField state={searchQuery} setState={setSearchQuery} placeholder={"serach"} />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <CutsomButton title="Log in" />
            <CutsomButton title="Sign up" variant="contained" sx={{ boxShadow: "0 0 0 0 " }} />
            <CustomIconButton />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavBar;
