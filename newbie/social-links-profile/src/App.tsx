function App() {
  const links = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <div className="flex justify-center items-center text-white min-h-svh md:min-h-screen">
      <main className="flex flex-col items-center text-center gap-3 bg-grey800 rounded-lg p-5">
        <img className="rounded-full" src="/images/avatar-jessica.jpeg" alt="avatar" />
        <h1>Jessica Randall</h1>
        <p>London, United Kingdom</p>
        <p>"Front-end developer and avid reader."</p>

        {links.map((link) => (
          <button key={link} type="button" className="w-full bg-grey700 p-3 rounded-lg">
            {link}
          </button>
        ))}
      </main>
    </div>
  );
}

export default App;
