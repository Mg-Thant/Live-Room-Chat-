import { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";

const Room = ({ username, room }) => {
  const [roomUser, setRoomUser] = useState(["user1", "user2", "user3"]);
  const [receivedMessages, setReceivedMessages] = useState([
    "Hello",
    "how are you",
    "i hope you are well",
  ]);
  return (
    <section className="flex gap-4">
      <div className="w-1/3 bg-blue-600 h-screen text-white font-medium relative">
        <p className="text-3xl font-bold text-center mt-5">Room.io</p>
        <div className="mt-10 ps-2">
          <p className="text-lg flex items-end gap-1">
            <ChatBubbleLeftRightIcon width={30} height={30} />
            Room Name
          </p>
          <p className="bg-white text-blue-600 ps-5 py-2 rounded-tl-full rounded-bl-full">
            {room}
          </p>
        </div>
        <div className="mt-5 ps-2">
          <p className="flex items-center gap-2 text-lg mb-3">
            <UserGroupIcon width={30} height={30} />
            Users
          </p>
          {roomUser.map((user, i) => (
            <p key={i} className="flex items-end gap-2 text-sm my-2">
              <UserIcon width={26} height={26} />
              {user}
            </p>
          ))}
        </div>
        <button
          type="button"
          className="absolute bottom-0 p-2.5 flex items-center gap-1 w-full mx-2 mb-2 text-lg"
        >
          <ArrowRightOnRectangleIcon width={30} height={30} />
          Leave Room
        </button>
      </div>
      <div className="w-full pt-5 relative">
        <div className="h-[30rem] overflow-y-auto">
          {receivedMessages.map((msg, i) => {
            return (
              <div
                key={i}
                className="text-white bg-blue-600 px-3 py-2 m-3 w-3/4 rounded-[20px] rounded-bl-none"
              >
                <p className="text-sm font-medium font-mono">From Bot</p>
                <p className="text-lg font-medium">{msg}</p>
                <p className="text-sm font-mono font-medium text-right">
                  Less than a minute
                </p>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-0 my-2 py-2.5 flex items-end w-full px-2">
          <input type="text" placeholder="Message..." className="w-full outline-none border-b border-b-blue-600 text-lg me-2" />
          <button type="button" className="hover:-rotate-45 duration-200">
            <PaperAirplaneIcon
              width={30}
              height={30}
              className="text-blue-600"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Room;
