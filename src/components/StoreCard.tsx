import { StoreNextDoor } from "../StoreNextDoor";

interface Props {
  store: StoreNextDoor;
}
const StoreCard = ({ store }: Props) => {
  return (
    <section className="storeCard">
      <h3>{store.name}</h3>
      <img src={store.image} alt="" />
      <p>
        Season {store.season} Episode {store.episode}
      </p>
    </section>
  );
};

export default StoreCard;
