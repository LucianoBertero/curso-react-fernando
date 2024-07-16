import { AddOutlined, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { JournayLayout } from "../layout/JournayLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournayLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
        aspernatur neque, numquam, tenetur voluptate obcaecati, fuga beatae
        molestiae error asperiores nemo harum blanditiis modi qui laudantium
        animi amet veniam magni.
      </Typography> */}

      <NothingSelectedView></NothingSelectedView>
      {/* <NoteView></NoteView> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover:": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}></AddOutlined>
      </IconButton>
    </JournayLayout>
  );
};
