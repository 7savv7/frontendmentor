import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState<number>(3);

  return (
    <div className="min-h-svh bg-navy50 flex justify-center items-center lg:min-h-screen">
      <div className="w-full h-full min-h-svh p-5 bg-white lg:w-1/2 lg:h-fit lg:rounded-lg lg:min-h-fit">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="font-[800] text-[1.5em] text-navy950">
              Notifications
            </p>

            <div className="bg-blue950 pb-[1px] px-3 rounded-md">
              <p className="text-white font-[800]">{notifications}</p>
            </div>
          </div>

          <button
            onClick={() => setNotifications(0)}
            type="button"
            className="cursor-pointer text-gray600"
          >
            Mark all as read
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <div className="flex gap-4">
            <img src="/images/avatar-mark-webber.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>
                Mark Webber reacted to your recent post My first tournament
                today!
              </p>

              <p>1m ago</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src="/images/avatar-angela-gray.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>Angela Gray followed you</p>

              <p>5m ago</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src="/images/avatar-jacob-thompson.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>Jacob Thompson has joined your group Chess Club</p>

              <p>1 day ago</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src="/images/avatar-rizky-hasanuddin.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>Rizky Hasanuddin sent you a private message</p>

              <p>5 days ago</p>

              <div>
                <p>
                  Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <img src="/images/avatar-kimberly-smith.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>Kimberly Smith commented on your picture</p>

              <p>1 week ago</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src="/images/avatar-nathan-peterson.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>
                Nathan Peterson reacted to your recent post 5 end-game
                strategies to increase your win rate
              </p>

              <p>2 weeks ago</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src="/images/avatar-anna-kim.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>Anna Kim left the group Chess Club</p>

              <p>2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
