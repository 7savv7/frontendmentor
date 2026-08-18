import { useState } from "react";
import data from "./data.json";
import Comment from "./Comment";

export interface UserType {
  image: {
    png: string;
    webp: string;
  };
  username: string;
  likes: number[];
}

export interface ReplyType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

export interface CommentType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: ReplyType[];
}

function App() {
  const [user, setUser] = useState<UserType>({
    ...data.currentUser,
    likes: [],
  });
  const [comments, setComments] = useState<CommentType[]>(data.comments);

  return (
    <div className="p-5 min-h-svh md:min-h-screen">
      <main className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex flex-col gap-4">
              <Comment comment={comment} user={user} />

              {comment.replies.length > 0 && (
                <div className="flex gap-4">
                  <div className="w-1 h-auto bg-grey100" />

                  <div className="flex flex-col gap-4">
                    {comment.replies.map((reply) => (
                      <Comment key={reply.id} comment={reply} user={user} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 rounded-md items-start gap-5 p-5 bg-white">
          <img
            className="w-10 h-10"
            src={user.image.webp}
            alt={user.username}
          />

          <textarea
            placeholder="Add a comment..."
            className="text-grey800 font-[500] row-start-1 col-start-1 col-span-2 min-h-20 align-top flex-1 
          border outline-none resize-none border-grey100 rounded-md p-2"
          />

          <button
            type="button"
            className="justify-self-end bg-purple600 uppercase text-white rounded-md py-2 px-5 w-fit"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
