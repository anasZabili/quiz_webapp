import { Password, Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { State } from "joi";

interface DialogPasswordProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  onSubmit: (password: string) => void;
}

const StyledDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    backgroundColor: "#1A1A1A",
    borderRadius: "1rem",
  },
});

const DialogPassword: React.FC<DialogPasswordProps> = ({
  open,
  setOpen,
  onSubmit,
}) => {
  const defaultValuePassword = {
    password: "",
    showPassword: false,
  };
  const [passwordValue, setPaswword] = useState(defaultValuePassword);
  const handleClose = () => {
    setPaswword(defaultValuePassword);
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setPaswword({
      ...passwordValue,
      showPassword: !passwordValue.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleValidate = () => {
    onSubmit(passwordValue.password);
    // console.log("password values", passwordValue);
  };
  return (
    <StyledDialog open={open} onClose={handleClose}>
      <Grid container rowGap={3} direction="column">
        <DialogTitle color="primary">
          Entrer le mot de passe du quiz
        </DialogTitle>
        <DialogContent>
          <FormControl
            sx={{ mt: 1 }}
            variant="outlined"
            color="primary"
            focused
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={passwordValue.showPassword ? "text" : "password"}
              value={passwordValue.password}
              sx={{
                color: "#eef3f8",
              }}
              onChange={(e) =>
                setPaswword({ ...passwordValue, password: e.target.value })
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    color="primary"
                  >
                    {passwordValue.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </DialogContent>
      </Grid>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Annuler
        </Button>
        <Button onClick={handleValidate} color="primary">
          Valider
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default DialogPassword;
