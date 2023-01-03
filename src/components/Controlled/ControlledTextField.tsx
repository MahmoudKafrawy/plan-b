import { TextField, TextFieldProps } from "@mui/material";

type ControlledTextFieldProps = {
  state: any;
  setState: CallableFunction;
} & Omit<TextFieldProps, "value" | "onChange">;

const ControlledTextField: React.FC<ControlledTextFieldProps> = ({ state, setState }) => {
  return (
    <TextField
      size="small"
      fullWidth
      sx={{ borderRadius: "10px" }}
      value={state}
      onChange={(e) => setState(e.target.value)}
    ></TextField>
  );
};

export default ControlledTextField;
