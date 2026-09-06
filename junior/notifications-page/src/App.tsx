function App() {
  return (
    <div className="min-h-svh bg-navy50 flex justify-center items-center lg:min-h-screen">
      <div className="w-full h-full min-h-svh p-5 bg-white lg:w-1/2 lg:h-fit lg:rounded-lg lg:min-h-fit">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="font-[800] text-[1.5em] text-navy950">Notifications</p>

            <div className="bg-blue950 pb-[1px] px-3 rounded-md">
              <p className="text-white font-[800]">3</p>
            </div>
          </div>

          <button type="button" className="text-gray600">Mark all as read</button>
        </div>
      </div>
    </div>
  );
}

export default App;

/*   
  Mark Webber reacted to your recent post My first tournament today!
  1m ago

  Angela Gray followed you
  5m ago

  Jacob Thompson has joined your group Chess Club
  1 day ago

  Rizky Hasanuddin sent you a private message
  5 days ago
  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
  I'm already having lots of fun and improving my game.

  Kimberly Smith commented on your picture
  1 week ago

  Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
  2 weeks ago

  Anna Kim left the group Chess Club
  2 weeks ago */
