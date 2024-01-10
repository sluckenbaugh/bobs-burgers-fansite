import { Character } from "../App";
import "../index.css";

interface Props {
  character: Character | undefined;
}
const characterCard = ({ character }: Props) => {
  return (
    <section className="charCard">
      <h3>{character?.name}</h3>
      <img src={character?.image} alt={`image of ${character?.name}`} />
    </section>
  );
};

export default characterCard;
