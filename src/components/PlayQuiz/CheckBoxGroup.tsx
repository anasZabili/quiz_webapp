import { Checkbox, Typography } from "@mui/material";
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

const CheckBoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  // space beetween checkboxes
  justifyContent: "space-between",

  alignItems: "center",
  width: "200px",
});

interface CheckboxsState {
  checkboxsState: {
    id: string;
    isChecked: boolean;
  }[];
}

interface CheckBoxGroupProps {
  answers: IAnswers["answers"];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  answers,
  handleChange,
}) => {
  return (
    <StyledBox>
      {answers?.map((value, index) => {
        return (
          <>
            <CheckBoxContainer key={index}>
              <Typography variant="h5">{value.text}</Typography>
              <Checkbox value={value.id} onChange={handleChange} />
            </CheckBoxContainer>
          </>
        );
      })}
    </StyledBox>
  );
};

export default CheckBoxGroup;
