function App() {
  return (
    <main className="bg-white rounded-2xl p-5 w-full max-w-80 border shadow-[10px_10px_0px_0px_black]">
      <img
        className="rounded-xl"
        src="/images/illustration-article.svg"
        alt="illustration"
      />

      <div className="bg-yellow mt-5 rounded-md p-1 px-4 w-fit font-bold">
        <p>Learning</p>
      </div>

      <p className="mt-3 text-sm font-medium">Published 21 Dec 2023</p>

      <h1 className="mt-4 font-extrabold text-xl cursor-pointer hover:text-yellow">
        HTML & CSS foundations
      </h1>

      <p className="mt-3 text-g500 text-sm font-medium">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <div className="flex gap-2 items-center mt-4">
        <img className="w-7 h-7" src="images/image-avatar.webp" alt="avatar" />

        <p className="font-bold">Greg Hooper</p>
      </div>
    </main>
  );
}

export default App;
