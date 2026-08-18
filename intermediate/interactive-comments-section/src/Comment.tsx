import { useState } from "react";
import type { CommentType, ReplyType, UserType } from "./App";
import { createPortal } from "react-dom";

interface Props {
  comment: CommentType | ReplyType;
  user: UserType;
  handleDelete: () => void;
  handleUpdate: (id: number, text: string) => void;
  handleReply: (user: string, text: string) => void;
}

function Comment({
  comment,
  user,
  handleDelete,
  handleUpdate,
  handleReply,
}: Props) {
  const [reply, setReply] = useState<boolean>(false);
  const [replyText, setReplyText] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(comment.content);
  const [del, setDel] = useState<boolean>(false);
  const [vote, setVote] = useState<number>(0);

  const handleEdit = () => {
    setEditText(comment.content);
    setEdit((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col gap-5 bg-white p-5 rounded-md md:flex-row-reverse md:relative">
        <div className="flex flex-col gap-4 md:flex-1">
          <div className="flex gap-4 items-center">
            <img
              className="w-10 h-10"
              src={comment.user.image.webp}
              alt={comment.user.username}
            />

            <div className="flex items-center gap-2">
              <p className="font-semibold text-grey800">
                {comment.user.username}
              </p>

              {user.username === comment.user.username && (
                <div className="bg-purple600 px-1 rounded-sm">
                  <p className="text-white text-[14px]">you</p>
                </div>
              )}
            </div>

            <p className="text-grey500">{comment.createdAt}</p>
          </div>

          {edit ? (
            <>
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Add a reply..."
                className="text-grey800 font-[500] row-start-1 col-start-1 col-span-2 min-h-20 align-top flex-1 
                border outline-none resize-none border-grey100 rounded-md p-2 w-full"
              />

              <button
                onClick={() => {
                  handleUpdate(comment.id, editText);
                  setEdit(false);
                }}
                type="button"
                className="cursor-pointer self-end bg-purple600 uppercase text-white rounded-md py-2 px-5 w-fit hover:opacity-50"
              >
                Update
              </button>
            </>
          ) : (
            <p className="text-grey500">
              <span className="text-purple600 font-semibold">
                {"replyingTo" in comment && `@${comment.replyingTo}`}{" "}
              </span>
              {comment.content}
            </p>
          )}
        </div>

        <div className="flex item-center justify-between">
          <div
            className="flex items-center justify-between gap-4 bg-grey50 
            rounded-lg px-4 py-2 md:flex-col md:h-fit md:py-4"
          >
            <svg
              className="group cursor-pointer"
              onClick={() => setVote((prev) => (Math.abs(prev) === 1 ? 0 : 1))}
              width="11"
              height="11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${vote === 1 && "fill-purple600"} group-hover:fill-purple600`}
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>

            <p className="text-purple600 font-semibold">
              {comment.score + vote}
            </p>

            <svg
              className="group cursor-pointer"
              onClick={() => setVote((prev) => (Math.abs(prev) === 1 ? 0 : -1))}
              width="11"
              height="3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${vote === -1 && "fill-purple600"} group-hover:fill-purple600`}
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </div>

          <div className="flex items-center gap-4 md:absolute md:top-0 md:right-0 md:pt-5 md:pr-5">
            {user.username === comment.user.username ? (
              <>
                <div
                  onClick={() => setDel(true)}
                  className="cursor-pointer flex items-center gap-2 hover:opacity-50"
                >
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                      fill="#ED6368"
                    />
                  </svg>

                  <p className="text-pink400 font-semibold">Delete</p>
                </div>

                <div
                  onClick={handleEdit}
                  className="cursor-pointer flex items-center gap-2 hover:opacity-50"
                >
                  <svg
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                      fill="#5357B6"
                    />
                  </svg>

                  <p className="text-purple600 font-semibold">Edit</p>
                </div>
              </>
            ) : (
              <div
                onClick={() => setReply((prev) => !prev)}
                className="cursor-pointer flex items-center gap-2 hover:opacity-50"
              >
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                    fill="#5357B6"
                  />
                </svg>

                <p className="text-purple600 font-semibold">Reply</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {reply && (
        <div
          className="grid grid-cols-2 rounded-md items-start gap-5 p-5 
          bg-white md:grid-cols-3 md:grid-cols-[auto_1fr_auto]"
        >
          <img
            className="w-10 h-10"
            src={user.image.webp}
            alt={user.username}
          />

          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Add a reply..."
            className="text-grey800 font-[500] row-start-1 col-start-1 col-span-2 min-h-20 
            align-top flex-1 border outline-none resize-none border-grey100 rounded-md p-2 
            md:col-start-2 md:col-span-1 md:min-h-25 focus:border-grey800"
          />

          <button
            onClick={() => {
              handleReply(comment.user.username, replyText);
              setReplyText("");
              setReply(false);
            }}
            type="button"
            className="cursor-pointer justify-self-end bg-purple600 uppercase text-white 
            rounded-md py-2 px-5 w-fit hover:opacity-50"
          >
            Reply
          </button>
        </div>
      )}
      {del &&
        createPortal(
          <div className="flex justify-center items-center h-full w-full bg-black/50 fixed z-10 top-0 left-0 p-5">
            <div className="w-full max-w-100 flex flex-col gap-4 bg-white rounded-md p-8">
              <p className="text-grey800 text-[1.6rem] font-[500]">
                Delete comment
              </p>

              <p className="text-grey500">
                Are you sure you want to delete this comment? This will remove
                the comment and can't be undone.
              </p>

              <div className="flex gap-2 w-full text-white">
                <button
                  onClick={() => setDel(false)}
                  type="button"
                  className="cursor-pointer flex-1 bg-grey500 rounded-md py-2 uppercase hover:opacity-50"
                >
                  No, Cancel
                </button>

                <button
                  onClick={handleDelete}
                  type="button"
                  className="cursor-pointer flex-1 bg-pink400 rounded-md py-2 uppercase hover:opacity-50"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default Comment;
