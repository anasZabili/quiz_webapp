import { Password } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

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
  const [paswword, setPaswword] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const handleValidate = () => {
    onSubmit(paswword);
  };
  return (
    <StyledDialog open={open} onClose={handleClose}>
      <DialogTitle color="secondary">Entrer le mot de passe</DialogTitle>
      <DialogContent>
        <TextField
          color="secondary"
          autoFocus
          margin="dense"
          id="password"
          label="Mot de passe"
          type="password"
          fullWidth
          variant="standard"
          onChange={(e) => setPaswword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Annuler
        </Button>
        <Button onClick={handleValidate} color="secondary">
          Valider
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default DialogPassword;
