import { useContext, useEffect } from "react";
import NavSimple from "./components/NavSimple";
import { ColorContext } from "./App";
import usePreviousColor from "./Hooks/usePreviousColor";
import bob from "./static/bob.jpg";
import burgers from "./static/bobs-burgers.jpg";

const About = () => {
  const { color } = useContext(ColorContext);

  useEffect(() => {
    const prev = usePreviousColor(color);
    document.body.classList.replace(prev, color);
  }, [color]);

  return (
    <div>
      <NavSimple />
      <div className="backdrop-2">
        <h1 className="heading--about">About</h1>
        <main className="about">
          <div className="article-1">
            <img src={bob} alt="" />
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              maiores impedit minima quibusdam eligendi dolorum labore
              cupiditate iure reiciendis deserunt, eos itaque porro expedita
              laudantium necessitatibus officia ab magni illo? Eaque, ullam
              blanditiis doloribus consequatur labore temporibus explicabo
              reiciendis pariatur. Adipisci officia et, neque necessitatibus,
              perspiciatis ipsum eaque nobis voluptas
            </article>
          </div>
          <article className="article-2">
            Eaque, ullam blanditiis doloribus consequatur labore temporibus
            explicabo reiciendis pariatur. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Adipisci officia et, neque
            necessitatibus, perspiciatis ipsum eaque nobis voluptas quae
            provident fugiat quo eveniet itaque eum nulla impedit, non
            reiciendis culpa. Sapiente rerum aliquam, accusamus molestiae,
            aperiam cum tempore esse dignissimos amet, placeat ut accusantium?
            Ab at non nemo repellendus architecto!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestias quas incidunt neque. Repellendus reiciendis quis,
            molestias saepe iure, distinctio eos quia nobis odit sunt ratione
            modi nesciunt necessitatibus! Maxime deleniti tenetur consequatur
            dolorum. Asperiores tempora magni necessitatibus id, placeat aliquam
            doloremque earum repellat magnam! Sed possimus fuga architecto nisi
            officia qui. Consequatur, eveniet exercitationem, tempora iusto amet
            excepturi obcaecati laboriosam iure qui deserunt quam laborum
            consequuntur. Enim, debitis quas.
          </article>
        </main>
        <img className="burgers" src={burgers} alt="" />
      </div>
    </div>
  );
};

export default About;
