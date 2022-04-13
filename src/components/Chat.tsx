import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import {
  BellIcon,
  HelpIcon,
  InboxIcon,
  MessageIcon,
  PlusIcon,
  SearchIcon,
  SendIcon,
  UsersIcon,
} from "../assets/icons";
import { selectChannelId, selectChannelName } from "../feature/channelSlice";
import { auth, db } from "../firestore";

const ChatHeader = () => {
  const channelName = useSelector(selectChannelName);
  return (
    <header className="flex justify-between items-center shadow px-5 py-3">
      <div className="flex items-center space-x-2">
        <span className="text-2xl sm:text-3xl">#</span>
        <span>{channelName}</span>
      </div>
      <div className="flex space-x-3 items-center">
        <div className="flex">
          <BellIcon className="stroke-gray-300 w-6 h-6 cursor-pointer hover:stroke-gray-300/80 active:stroke-gray-300/90" />
          <MessageIcon className="stroke-gray-300 w-6 h-6 cursor-pointer hover:stroke-gray-300/80 active:stroke-gray-300/90" />
          <UsersIcon className="stroke-gray-300 w-6 h-6 cursor-pointer hover:stroke-gray-300/80 active:stroke-gray-300/90" />
        </div>
        <div className="bg-neutral-800 flex w-max py-1 px-2 rounded-lg">
          <input
            type="text"
            className="bg-transparent border-none outline-none"
            placeholder="search"
          />
          <SearchIcon className="w-5 h-5 stroke-gray-200" />
        </div>
        <InboxIcon className="stroke-gray-300 w-6 h-6 cursor-pointer hover:stroke-gray-300/80 active:stroke-gray-300/90" />
        <HelpIcon className="stroke-gray-300 w-6 h-6 cursor-pointer hover:stroke-gray-300/80 active:stroke-gray-300/90" />
      </div>
    </header>
  );
};

export const Chat = () => {
  const [user] = useAuthState(auth);
  const channelId = useSelector(selectChannelId);
  const [messages] = useCollection(
    collection(db, "channels", channelId, "messages")
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current?.value !== "") {
      addDoc(collection(db, "channels", channelId, "messages"), {
        timestamp: serverTimestamp(),
        message: inputRef.current?.value,
        name: user?.displayName,
        photoUrl: user?.photoURL,
        email: user?.email,
      });
    }
    inputRef.current!.value = "";
    scrollToBottom();
  };

  return (
    <section className="bg-[#36393f] w-full h-full text-gray-200 grid grid-rows-[max-content_1fr_max-content]">
      <ChatHeader />
      <main>
        <div ref={chatRef} className="pb-16">
          {messages?.docs.map((message) => {
            return <div>{message.data().message}</div>;
          })}
        </div>
      </main>
      <div className="flex space-x-2 items-center w-[98%] rounded-xl px-2 mb-1.5 mx-auto h-[55px] bg-discord_channelsBg/90">
        <div className="rounded-full bg-gray-400 p-0.5">
          <PlusIcon className="stroke-gray-900 w-5 h-5" />
        </div>
        <form className="w-full flex" onSubmit={handleSendMessage}>
          <input
            className="bg-transparent w-full border-none outline-none placeholder:text-gray-500/50"
            disabled={!channelId}
            placeholder="Message"
            ref={inputRef}
          />
          <button type="submit">
            <SendIcon className="stroke-gray-200 w-8 h-8 mr-4 hover:stroke-gray-200/80 active:stroke-gray-200/90" />
          </button>
        </form>
      </div>
    </section>
  );
};
