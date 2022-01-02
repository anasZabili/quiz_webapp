import { styled } from "@mui/system";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& > *": {
    marginBottom: "1em",
  },
});

interface CenterFormProps {
  children: React.ReactNode;
}

const CenterForm: React.FC<CenterFormProps> = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export default CenterForm;
