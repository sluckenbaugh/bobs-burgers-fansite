import { FormEvent, useRef } from "react";
import search from "../static/search.svg";

interface Props {
  handleSearch: (input: string | undefined) => void;
}
const searchCharacter = ({ handleSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        className="search__bar"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          handleSearch(ref.current?.value);
        }}
      >
        <input className="input" ref={ref} placeholder="Search Characters" />
        <button className="btn">
          <img src={search} alt="" />
        </button>
      </form>
    </div>
  );
};

export default searchCharacter;
