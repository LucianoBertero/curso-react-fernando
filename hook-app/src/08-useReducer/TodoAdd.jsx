import { useForm } from "../hooks";

//Para comunicar del hijo al padre se envia una referencia de la funcion, el cual
//El hijo la recibe y para emitir en el padre se ve que pasa

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.lenght <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Que hay que hacer?"
          className="form-control"
          value={description}
          name="description"
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1
            "
          onClick={onFormSubmit}
        >
          Agregar
        </button>
      </form>
    </>
  );
};
