import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState<number>(3);

  return (
    <div className="min-h-svh bg-navy50 flex justify-center items-center lg:p-20 lg:min-h-screen">
      <div className="w-full h-full min-h-svh p-5 bg-white lg:w-[60%] lg:max-w-200 lg:h-fit lg:rounded-lg lg:min-h-fit">
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
            className="cursor-pointer text-gray600 hover:text-blue950"
          >
            Mark all as read
          </button>
        </div>

        <div
          className="flex flex-col gap-2 mt-6 text-gray600 [&>div]:rounded-lg [&>div]:p-5 
          [&>div>img]:w-10 [&>div>img]:h-10 [&>div>div_span:first-child]:text-navy950 
          [&>div>div_span:first-child]:cursor-pointer [&>div>div_span:first-child]:hover:text-blue950
          [&>div>div_span]:font-[800] [&>div>div>p:nth-child(2)]:text-gray500"
        >
          <div className={`flex gap-4 ${notifications > 0 && "bg-navy50"}`}>
            <img src="/images/avatar-mark-webber.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>
                <span>Mark Webber</span> reacted to your recent post{" "}
                <span className="cursor-pointer text-gray600 hover:text-blue950">
                  My first tournament today!
                </span>
                {notifications > 0 && (
                  <span className="inline-block w-[10px] h-[10px] bg-red500 rounded-full ml-2" />
                )}
              </p>

              <p>1m ago</p>
            </div>
          </div>

          <div className={`flex gap-4 ${notifications > 0 && "bg-navy50"}`}>
            <img src="/images/avatar-angela-gray.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>
                <span>Angela Gray</span> followed you
                {notifications > 0 && (
                  <span className="inline-block w-[10px] h-[10px] bg-red500 rounded-full ml-2" />
                )}
              </p>

              <p>5m ago</p>
            </div>
          </div>

          <div className={`flex gap-4 ${notifications > 0 && "bg-navy50"}`}>
            <img src="/images/avatar-jacob-thompson.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>
                <span>Jacob Thompson</span> has joined your group{" "}
                <span className="cursor-pointer text-blue950">Chess Club</span>
                {notifications > 0 && (
                  <span className="inline-block w-[10px] h-[10px] bg-red500 rounded-full ml-2" />
                )}
              </p>

              <p>1 day ago</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src="/images/avatar-rizky-hasanuddin.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>
                <span>Rizky Hasanuddin</span> sent you a private message
              </p>

              <p>5 days ago</p>

              <div className="cursor-pointer border border-navy100 rounded-md text-gray600 p-4 mt-4 hover:bg-blue100">
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
              <p>
                <span>Kimberly Smith</span> commented on your picture
              </p>

              <p>1 week ago</p>
            </div>

            <img
              className="cursor-pointer"
              src="/images/image-chess.webp"
              alt="chess"
            />
          </div>

          <div className="flex gap-4">
            <img src="/images/avatar-nathan-peterson.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>
                <span>Nathan Peterson</span> reacted to your recent post{" "}
                <span className="cursor-pointer text-gray600 hover:text-blue950">
                  5 end-game strategies to increase your win rate
                </span>
              </p>

              <p>2 weeks ago</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src="/images/avatar-anna-kim.webp" alt="mark-webber" />

            <div className="flex-1">
              <p>
                <span>Anna Kim</span> left the group{" "}
                <span className="cursor-pointer text-blue950">Chess Club</span>
              </p>

              <p>2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
