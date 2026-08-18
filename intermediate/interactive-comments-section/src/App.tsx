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
      <main className="w-full">
        <div className="flex flex-col gap-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex flex-col gap-4">
              <Comment comment={comment} user={user} />

              {comment.replies.length > 0 && (
                <div className="flex gap-4">
                  <div className="w-3 h-auto bg-grey100" />

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
      </main>
    </div>
  );
}

export default App;
