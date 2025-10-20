import About from "./About";
import GridItems from "./GridItems";
import SlideShow from "./SlideShow";

const Content = () => {
  return (
    <>
      <section className="mb-25">
        <SlideShow />
      </section>
      <section className="mb-25">
        <GridItems />
      </section>
      <section>
        <About />
      </section>
    </>
  );
};

export default Content;
