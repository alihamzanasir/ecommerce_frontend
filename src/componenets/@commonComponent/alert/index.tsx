import { Button, IconButton } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

interface TypeCheck {
  vertical: "top" | "bottom";
  horizontal: "right" | "left" | "center";
  open: boolean;
  setOpen: any;
}

const CustomAlert = ({ vertical, horizontal, open, setOpen }: TypeCheck) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        {/* <CloseIcon fontSize="small" /> */}
        close
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      message="Note archived"
      action={action}
    />
  );
};

export default CustomAlert;
