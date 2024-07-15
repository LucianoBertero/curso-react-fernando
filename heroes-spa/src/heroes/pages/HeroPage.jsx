import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);
  // const hero = getHeroById(id);

  const onNavigateBack = () => {
    navigate(-1);
  };

  //sacarlo de la pagina si entra de otra forma
  if (!hero) {
    return <Navigate to="/marvel"></Navigate>;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt=""
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-gorup list-group-flush">
          <li className="list-gorup-item">
            <b>Alter ego:</b> {hero.alter_ego}{" "}
          </li>
          <li className="list-gorup-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-gorup-item">
            <b>First Apparence:</b> {hero.first_appearance}{" "}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button onClick={onNavigateBack} className="btn btn-outline-info">
          Regresar
        </button>
      </div>
    </div>
  );
};
