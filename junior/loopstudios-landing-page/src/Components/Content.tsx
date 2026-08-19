import Cards from "./Cards";
import Info from "./Info";

function Content() {
  return (
    <main className="flex flex-col justify-between gap-30 p-10 lg:p-30">
      <Info />

      <Cards />
    </main>
  );
}

export default Content;
