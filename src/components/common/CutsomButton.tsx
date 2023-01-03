import { Button, ButtonProps } from "@mui/material";

interface CutsomButtonProps extends ButtonProps {
  title: string;
}
const CutsomButton: React.FC<CutsomButtonProps> = ({ title, ...props }) => {
  return (
    <Button variant="outlined" {...props}>
      {title}
    </Button>
  );
};

export default CutsomButton;
