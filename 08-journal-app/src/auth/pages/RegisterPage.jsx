import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RounterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
export const RegisterPage = () => {
  return (
    <>
      <>
        <AuthLayout title="Crear Cuenta">
          <form>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Nombre completo"
                  type="text"
                  placeholder="Luciano Bertero"
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="Correo@gmail.com"
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Contraseña"
                  type="password"
                  placeholder="****"
                  fullWidth
                ></TextField>
              </Grid>
              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    <Google />
                    <Typography hy sx={{ ml: 1 }}>
                      Google
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Typography sx={{ mr: 1 }}>Ya tienes cuenta??</Typography>
                <Link component={RounterLink} color="inherit" to="/auth/login">
                  Ingresar
                </Link>
              </Grid>
            </Grid>
          </form>
        </AuthLayout>
      </>
    </>
  );
};
