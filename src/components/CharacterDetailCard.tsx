import { Character } from "../App";

interface Props {
  character: Character;
}
const CharacterDetailCard = ({ character }: Props) => {
  return (
    <div>
      {character.name}
      <img className="detail__image" src={character.image} alt="" />
      {character.age?.substring(0, 2)}
      {character.allOccupations.map((o) => (
        <p>{o}</p>
      ))}
      {character.firstEpisode}
      {character.relatives.map((r) => (
        <p>{r.name}</p>
      ))}
    </div>
  );
};

export default CharacterDetailCard;
