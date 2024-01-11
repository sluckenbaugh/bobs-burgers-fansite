import { Link } from "react-router-dom";
import { Character } from "../App";
import "../index.css";

interface Props {
  character: Character | undefined;
}
const characterCard = ({ character }: Props) => {
  return (
    <section className="charCard">
      <Link className="link" to={`/character-details/${character?.id}`}>
        <h3>{character?.name}</h3>
        <img src={character?.image} alt={`image of ${character?.name}`} />
      </Link>
    </section>
  );
};

export default characterCard;
