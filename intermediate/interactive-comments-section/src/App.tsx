import { useState } from "react";
import data from "./data.json";
import Comment from "./Comment";

export interface UserType {
  image: {
    png: string;
    webp: string;
  };
  username: string;
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
  const [user, _] = useState<UserType>(data.currentUser);
  const [comments, setComments] = useState<CommentType[]>(data.comments);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = () => {
    if (comment.trim() === "") return;

    const com = {
      content: comment,
      createdAt: "Just Now",
      score: 0,
      user: {
        image: user.image,
        username: user.username,
      },
      replies: [],
    };
    setComment("");
    setComments((prev) => [...prev, { id: Math.random(), ...com }]);
  };

  const deleteComment = (id: number) => {
    setComments((prev) => prev.filter((com) => com.id !== id));
  };

  const deleteReply = (commentId: number, id: number) => {
    setComments((prev) =>
      prev.map((com) =>
        com.id === commentId
          ? { ...com, replies: com.replies.filter((reply) => reply.id !== id) }
          : com,
      ),
    );
  };

  const updateComment = (id: number, text: string) => {
    if (text.trim() === "") return;
    setComments((prev) =>
      prev.map((com) => (com.id === id ? { ...com, content: text } : com)),
    );
  };

  const updateReply = (commentId: number) => {
    return function (id: number, text: string) {
      if (text.trim() === "") return;

      setComments((prev) =>
        prev.map((com) =>
          com.id === commentId
            ? {
                ...com,
                replies: com.replies.map((reply) =>
                  reply.id === id ? { ...reply, content: text } : reply,
                ),
              }
            : com,
        ),
      );
    };
  };

  const commentReply = (id: number) => {
    const rep = {
      createdAt: "Just Now",
      score: 0,
      user: {
        image: user.image,
        username: user.username,
      },
    };

    return function (user: string, text: string) {
      setComments((prev) =>
        prev.map((com) =>
          com.id === id
            ? {
                ...com,
                replies: [
                  ...com.replies,
                  {
                    id: Math.random(),
                    content: text,
                    replyingTo: user,
                    ...rep,
                  },
                ],
              }
            : com,
        ),
      );
    };
  };

  return (
    <div className="p-5 min-h-svh md:min-h-screen">
      <main className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex flex-col gap-4">
              <Comment
                comment={comment}
                user={user}
                handleDelete={() => deleteComment(comment.id)}
                handleUpdate={updateComment}
                handleReply={commentReply(comment.id)}
              />

              {comment.replies.length > 0 && (
                <div className="flex gap-4">
                  <div className="w-1 h-auto bg-grey100" />

                  <div className="flex flex-1 flex-col gap-4">
                    {comment.replies.map((reply) => (
                      <Comment
                        key={reply.id}
                        comment={reply}
                        user={user}
                        handleDelete={() => deleteReply(comment.id, reply.id)}
                        handleUpdate={updateReply(comment.id)}
                        handleReply={commentReply(comment.id)}
                      />
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="text-grey800 font-[500] row-start-1 col-start-1 col-span-2 min-h-20 align-top flex-1 
          border outline-none resize-none border-grey100 rounded-md p-2"
          />

          <button
            onClick={handleSubmit}
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
