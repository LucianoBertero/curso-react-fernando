import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent={"space-between"}
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight={"light"}>
          28 de Agosto
        </Typography>
      </Grid>
      <Grid item>
        <Button color={"primary"}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }}></SaveOutlined>
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
        ></TextField>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que sucedio en el dia hoy??"
          label="Titulo"
          minRows={5}
        ></TextField>
      </Grid>
      <ImageGallery></ImageGallery>
    </Grid>
  );
};
