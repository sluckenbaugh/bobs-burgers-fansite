import { FormEvent, useRef } from "react";

interface Props {
  handleSearch: (input: string | undefined) => void;
}
const searchCharacter = ({ handleSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          handleSearch(ref.current?.value);
        }}
      >
        <input ref={ref} placeholder="Search a Character" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default searchCharacter;
