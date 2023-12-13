import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

function Modal({
  isOpen,
  closeModal,
  title,
  content,
  action,
  dialogStyle = {},
  contentStyle = {},
  actionStyle = {},
  titleStyle = {},
  dialogProps,
}) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={dialogStyle}
        {...dialogProps}
      >
        {title && (
          <DialogTitle sx={titleStyle} id="alert-dialog-title">
            {title}
          </DialogTitle>
        )}
        {content && <DialogContent sx={contentStyle}>{content}</DialogContent>}
        {action && <DialogActions sx={actionStyle}>{action}</DialogActions>}
      </Dialog>
    </>
  );
}

export default Modal;
