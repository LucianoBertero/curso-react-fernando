import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RounterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  console.log(status);

  const { email, password, onInputChange } = useForm({
    email: "luchobertero@gmail.com",
    password: "12312312312",
  });

  const isAunthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(email, password);

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };
  return (
    <>
      <AuthLayout title="Login">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="Correo@gmail.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="****"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              ></TextField>
            </Grid>

            <Grid
              container
              display={!!errorMessage ? "" : "none"}
              sx={{ mt: 1, mb: 1 }}
            >
              <Grid item xs={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAunthenticating}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={onGoogleSignIn}
                  disabled={isAunthenticating}
                  variant="contained"
                  fullWidth
                >
                  <Google />
                  <Typography hy sx={{ ml: 1 }}>
                    Google
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RounterLink} color="inherit" to="/auth/register">
                Crear Cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
