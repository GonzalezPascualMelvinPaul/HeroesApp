import { useMemo } from "react";
import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
{
  /* <ul>
      {heroes.map((heroe) => (
        <li key={heroe.id}>{heroe.superhero}</li>
      ))}
    </ul> */
}
