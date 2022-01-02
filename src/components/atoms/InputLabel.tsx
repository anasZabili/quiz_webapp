import { styled } from "@mui/system";

interface InputLabelProps {
  children: React.ReactNode;
  [x: string]: any;
}

const Label = styled("label")({
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#eef3f8",
  // center the label
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: "auto",
  gridGap: "1rem",
  alignItems: "center",
});

const InputLabel: React.FC<InputLabelProps> = ({ children, ...props }) => {
  return <Label {...props}>{children}</Label>;
};

export default InputLabel;
