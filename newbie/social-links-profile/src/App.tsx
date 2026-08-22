function App() {
  const links = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <div className="flex justify-center items-center text-white min-h-svh p-5 md:min-h-screen">
      <main className="flex flex-col items-center text-center w-full max-w-90 gap-4 bg-grey800 rounded-lg p-5 md:p-8">
        <img
          className="rounded-full w-20 h-20"
          src="/images/avatar-jessica.jpeg"
          alt="avatar"
        />
        <h1 className="text-[1.6em] font-[700]">Jessica Randall</h1>
        <p className="text-green -mt-3">London, United Kingdom</p>
        <p className="text-white/80 mb-1 mt-2">
          "Front-end developer and avid reader."
        </p>

        {links.map((link) => (
          <button
            key={link}
            type="button"
            className="cursor-pointer w-full font-[600] bg-grey700 p-3 rounded-lg hover:bg-green hover:text-grey900"
          >
            {link}
          </button>
        ))}
      </main>
    </div>
  );
}

export default App;
