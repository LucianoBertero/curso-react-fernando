import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //ngOnInit
  useEffect(() => {
    // console.log("Use Effect called");
  }, []);

  //cambios en el formulario
  useEffect(() => {
    // console.log("Forms stateChange");
  }, [formState]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="luchobertero@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "luciano" && <Message></Message>}
    </>
  );
};
