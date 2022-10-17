import { useState } from "react";
import JudgeButton from "../button/JudgeButton";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 6,
  pb: 3,
};

export default function LastModal(props) {
  const { inputAnswer } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const LastJudge = () => {
    if (
      `${inputAnswer}` == "WILL YOU MARRY ME" ||
      `${inputAnswer}` == "WILLYOUMARRYME"
    ) {
      return <JudgeButton />;
    }
    return <p>(´·ω·`)ﾁｶﾞｳﾖ...</p>;
  };

  return (
    <div className="mt-6  w-1/2 text-center inline-block">
      <Button
        onClick={handleOpen}
        className="text-white w-full bg-blue-600 hover:bg-blue-400"
        variant="contained"
        size="medium"
      >
        こたえはこれ！！
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2>とちょからのメッセージは...</h2>
          <h1
            id="parent-modal-title"
            className="text-xl font-fancy tracking-widest"
          >
            ~{inputAnswer}~
          </h1>
          {LastJudge()}
        </Box>
      </Modal>
    </div>
  );
}
