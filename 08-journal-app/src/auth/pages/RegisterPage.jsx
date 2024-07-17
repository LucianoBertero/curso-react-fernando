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
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe tener mas de 6 letras",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  const onSubmited = (event) => {
    console.log(formState);
    event.preventDefault();
    setFormSubmited(true);

    if (!isFormValid) {
      return;
    }
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <>
      <>
        <AuthLayout title="Crear Cuenta">
          <form onSubmit={onSubmited}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Nombre completo"
                  type="text"
                  placeholder="Luciano Bertero"
                  fullWidth
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange}
                  error={!!displayNameValid && formSubmited}
                  helperText={displayNameValid}
                ></TextField>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="Correo@gmail.com"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  error={!!emailValid && formSubmited}
                  helperText={emailValid}
                ></TextField>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Contraseña"
                  type="password"
                  placeholder="****"
                  fullWidth
                  error={!!passwordValid && formSubmited}
                  helperText={passwordValid}
                  name="password"
                  value={password}
                  onChange={onInputChange}
                ></TextField>
              </Grid>
              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isCheckingAuthentication}
                  >
                    Crear cuenta
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
