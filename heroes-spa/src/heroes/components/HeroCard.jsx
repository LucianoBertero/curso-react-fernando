import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  console.log(id);
  //   const heroImageUrl = `./assets/heroes/${id}.jpg`;
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  console.log(heroImageUrl);

  return (
    <>
      <div
        className="card mb-3  animate__animated animate__fadeIn"
        style={{ maxWidth: 300 }}
      >
        <div className="row g-0">
          <div className="col-md-4 ">
            <img
              src={heroImageUrl}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{publisher}</p>
              <p className="card-text">
                {alter_ego !== characters && <p>{characters}</p>}
              </p>
              <p>{characters}</p>
              <Link to={`/hero/${id}`}> Mas informacion... </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
