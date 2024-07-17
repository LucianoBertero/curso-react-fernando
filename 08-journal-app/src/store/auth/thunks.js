import {
  registerUserWithEmailPassword,
  singInWithGoogle,
  loginWithEmailPassword,
  logoutFirebase,
} from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();
    console.log(result);
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });

    if (!ok) {
      return dispatch(logout({ errorMessage }));
    }

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const resp = await loginWithEmailPassword({ email, password });
    console.log(resp);

    if (!resp.ok) return dispatch(logout(resp));

    dispatch(login(result));
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout({}));
  };
};
