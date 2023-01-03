import { Language } from "@mui/icons-material";
import { IconButton } from "@mui/material";
const CustomIconButton = () => {
  return (
    <>
      <IconButton color="primary" component="label">
        <Language />
      </IconButton>
    </>
  );
};

export default CustomIconButton;
