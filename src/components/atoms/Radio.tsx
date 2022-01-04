import { Radio as MuiRadio } from "@mui/material";
import { styled } from "@mui/system";

interface RadioProps {
  [x: string]: any;
}

const Radio: React.FC<RadioProps> = ({ ...props }) => {
  return (
    <MuiRadio
      sx={{
        color: "#eef3f8",
        "&.Mui-checked": {
          color: "#8495a7",
        },
        margin: "0",
      }}
      {...props}
    />
  );
};

export default Radio;
