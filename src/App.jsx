import Content from "./components/Content";
import MainBlog from "./components/MainBlog";

const App = () => {
  return (
    <main className="flex justify-start items-start flex-col lg:flex-row">
      <section className="lg:sticky top-0 left-0 min-h-screen p-5 md:p-[30px] bg-hero bg-center bg-no-repeat bg-scroll w-full lg:w-1/2 shrink-0 z-10 ">
        <MainBlog />
      </section>
      <article className="flex-1 w-full p-5 md:p-[30px]">
        <Content />
      </article>
    </main>
  );
};

export default App;
