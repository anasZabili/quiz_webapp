import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

interface ToastProps {
  isOpen: boolean;
  isError: boolean;
  message: string;
  onClose: () => void;
  [x: string]: any;
}

const Toast: React.FC<ToastProps> = ({
  isOpen,
  isError,
  message,
  onClose,
  ...props
}) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={handleClose}
      {...props}
    >
      <Alert
        onClose={handleClose}
        severity={isError ? "error" : "success"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
