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
import CheckBoxAndLabel from "../molecules/CheckboxAndLabel";
import { CheckboxsState } from "./MultipleChoiceAnswer";
import { IAnswers } from "./Question";

const StyledBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridGap: "1rem",
  alignItems: "center",
  justifyItems: "center",
});

const StyledFormGroup = styled(FormGroup)({
  // display: "grid",
  // gridTemplateColumns: "auto auto",
  // gridGap: "1rem",
  // alignItems: "center",
  // justifyItems: "center",
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
  checked: CheckboxsState["checkboxsState"] | undefined;
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  answers,
  handleChange,
  isVerify,
  checked,
}) => {
  console.log("🚀 ~ file: CheckBoxGroup.tsx ~ line 54 ~ checked", checked);
  const isValueAtIndexChecked = (index: number) => {
    if (checked) {
      return checked[index].isChecked;
    } else {
      return false;
    }
  };

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
              return (
                <Grid
                  item
                  md={6}
                  xs={12}
                  container
                  justifyContent="center"
                  direction="row"
                  alignItems="center"
                  rowSpacing={2}
                >
                  <CheckBoxAndLabel
                    value={value.id}
                    checked={isValueAtIndexChecked(index)}
                    onChange={handleChange}
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
