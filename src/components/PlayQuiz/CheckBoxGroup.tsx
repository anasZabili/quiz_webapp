import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { useEffect, useState } from "react";
import { IAnswers } from "./Question";

const StyledBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridGap: "1rem",
  alignItems: "center",
  justifyItems: "center",
});

const StyledFormGroup = styled(FormGroup)({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridGap: "1rem",
  alignItems: "center",
  justifyItems: "center",
});

const CenterFormControlLabel = styled(FormControlLabel)({
  display: "flex",
  justifyContent: "center",
});

const CheckBoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "200px",
});

interface CheckBoxGroupProps {
  answers: IAnswers["answers"];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isVerify: boolean;
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  answers,
  handleChange,
  isVerify,
}) => {
  return (
    <StyledBox>
      <FormControl component="div" disabled={isVerify}>
        <StyledFormGroup>
          {answers?.map((value, index) => {
            return (
              <>
                <CheckBoxContainer key={index}>
                  <CenterFormControlLabel
                    control={
                      <Checkbox value={value.id} onChange={handleChange} />
                    }
                    label={value.text}
                  />
                </CheckBoxContainer>
              </>
            );
          })}
        </StyledFormGroup>
      </FormControl>
    </StyledBox>
  );
};

export default CheckBoxGroup;
