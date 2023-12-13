import React from "react";
import Button from "@mui/material/Button";
import Modal from "./Modal";
import { DialogContentText } from "@mui/material";

export default function ConfirmationModal({
  isOpen,
  successCallback,
  closeModal,
  title,
  content,
  buttonSaveText,
}) {
  const action = (
    <React.Fragment>
      <Button onClick={closeModal}>Cancel</Button>
      <Button onClick={successCallback} autoFocus>
        {buttonSaveText}
      </Button>
    </React.Fragment>
  );

  const contentText = <DialogContentText>{content}</DialogContentText>;

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      content={contentText}
      closeModal={closeModal}
      action={action}
    />
  );
}
