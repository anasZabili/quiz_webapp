interface ToastProps {
  open: boolean;
  [x: string]: any;
}

const Toast: React.FC<ToastProps> = ({ open }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        This is a success message!
      </Alert>
    </Snackbar>
  );
};
