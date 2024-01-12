import { Character } from "../App";

interface Props {
  character: Character;
}
const CharacterDetailCard = ({ character }: Props) => {
  return (
    <div className="detail__container">
      <div className="detail__card">
        <div className="card__header ">
          <img className="detail__image" src={character.image} alt="" />
          {character.name.length > 20 ? (
            <h2 className="big__name">{character.name}</h2>
          ) : (
            <h2>{character.name}</h2>
          )}
        </div>
        <div className="card__body" data-aos="slide-left">
          {character.age && <p>- Age: {character.age?.substring(0, 2)}</p>}
          {character.allOccupations.length > 0 &&
            character.allOccupations?.map((o) => <p>- Occupation: {o}</p>)}
          {character.firstEpisode && (
            <p>- First Appearance: {character.firstEpisode}</p>
          )}
          {character.voicedBy && <p>- Voiced By: {character.voicedBy}</p>}
          {character.relatives.length > 0 && (
            <ul>
              <p>- Relatives: </p>
              {character.relatives.map((r) => (
                <li>{r.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailCard;
