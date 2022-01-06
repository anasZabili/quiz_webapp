import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
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
    <Grid item xs={12}>
      <FormControl component="div" disabled={isVerify}>
        <StyledFormGroup>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            direction="row"
            alignItems="center"
            rowSpacing={2}
          >
            {answers?.map((value, index) => {
              console.log(
                "🚀 ~ file: CheckBoxGroup.tsx ~ line 68 ~ {answers?.map ~ value",
                value
              );

              return (
                <Grid item xs={6}>
                  <CenterFormControlLabel
                    control={
                      <Checkbox value={value.id} onChange={handleChange} />
                    }
                    label={value.text}
                  />
                </Grid>
              );
            })}
          </Grid>
        </StyledFormGroup>
      </FormControl>
    </Grid>
  );
};

export default CheckBoxGroup;
