import { HeroList } from "../components/HeroList";
export const MarvelPage = () => {
  return (
    <div>
      {" "}
      <div>
        <h1>DC Comics</h1>
        <hr />
        <HeroList publisher="Marvel Comics"></HeroList>
      </div>
    </div>
  );
};
