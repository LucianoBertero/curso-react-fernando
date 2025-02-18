import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
        width: { md: 450 },
      }}
    >
      <Grid
        item
        direction="row"
        justifyContent="center"
        sx={{
          width: { sm: 450 },
        }}
      >
        <CircularProgress color="warning"></CircularProgress>
      </Grid>
    </Grid>
  );
};
