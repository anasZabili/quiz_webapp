import { Grid, Typography } from "@mui/material";
import { toast, Slide } from "react-toastify";
import ErrorIcon from "@mui/icons-material//Error";
import CheckCircleIcon from "@mui/icons-material//CheckCircle";
import InfoIcon from "@mui/icons-material//Info";

const TIME_DELAY = 4000;

export function customErrorToast(title: string, message: string) {
  const options = {
    autoClose: TIME_DELAY,
    // autoClose: false,
    type: toast.TYPE.ERROR,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
    transition: Slide,
  };
  return toast(
    <Grid container>
      <Grid
        container
        item
        xs={2}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <ErrorIcon />
      </Grid>
      <Grid item xs>
        <Typography variant="h6">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body2">{message}</Typography>
      </Grid>
    </Grid>,
    options
  );
}

export function customSuccessToast(title: string, message: string) {
  const options = {
    autoClose: 3000,
    // autoClose: false,
    type: toast.TYPE.SUCCESS,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
    transition: Slide,
  };
  return toast(
    <Grid container>
      <Grid
        container
        item
        xs={2}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <InfoIcon />
      </Grid>
      <Grid item xs>
        <Typography variant="h6">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body2">{message}</Typography>
      </Grid>
    </Grid>,
    options
  );
}

export function customInfoToast(title: string, message: string) {
  const options = {
    autoClose: TIME_DELAY,
    // autoClose: false,
    type: toast.TYPE.INFO,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
    transition: Slide,
  };
  return toast(
    <Grid container>
      <Grid
        container
        item
        xs={2}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <CheckCircleIcon />
      </Grid>
      <Grid item xs>
        <Typography variant="h6">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body2">{message}</Typography>
      </Grid>
    </Grid>,
    options
  );
}
