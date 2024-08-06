import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MyBtn } from "../../styled/styled";

export default function Alert({ open, close, title, content }) {
  return (
    <div>
      <Dialog
        fullWidth="sm"
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
          <DialogActions>
            <MyBtn onClick={close}>cancel</MyBtn>
            <MyBtn onClick={close}>Add</MyBtn>
          </DialogActions>
      </Dialog>
    </div>
  );
}
