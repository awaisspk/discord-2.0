import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { Navigate } from "react-router-dom";
import {
  ChevronDown,
  MicIcon,
  PhoneIcon,
  PlusIcon,
  SettingsIcon,
} from "../assets/icons";
import { Channel } from "../components/Channel";
import { ServerIcon } from "../components/ServerIcon";

import { auth, db, app } from "../firestore";

export const Home = () => {
  const [user] = useAuthState(auth);
  const [channel, loading, error] = useCollection(
    collection(getFirestore(app), "channels")
  );

  const handleAddChannel = async () => {
    const channelName = prompt("Enter new channel name");
    if (channelName) {
      try {
        const docRef = await addDoc(collection(db, "channels"), {
          channelName: channelName,
        });
      } catch (err) {
        console.error("Error adding document", err);
      }
    }
  };

  return (
    <>
      {!user && <Navigate to="/" replace />}
      <section className="flex">
        <div className="bg-discord_serverBg flex flex-col items-center h-screen w-max space-y-3 py-5 px-2 sm:px-3">
          <div className="bg-gray-600 hover:bg-discord_blue flex justify-center items-center h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:rounded-2xl cursor-pointer transition-all">
            <img src="/images/discord.webp" alt="" className="h-4 sm:h-5" />
          </div>
          <hr className="border-gray-700 border w-8 mx-auto" />
          <ServerIcon image="/images/server1.png" />
          <ServerIcon image="/images/server2.png" />
          <ServerIcon image="/images/server1.png" />
          <ServerIcon image="/images/server2.png" />
          <button className="bg-gray-600 transition-all hover:bg-gray-600/80 hover:rounded-2xl active:bg-gray-600/90 rounded-full p-2">
            <PlusIcon className="stroke-green-500 w-7 h-7 sm:w-9 sm:h-9" />
          </button>
        </div>
        <div className="bg-discord_channelsBg grid grid-rows-[max-content_1fr_max-content]  max-w-full w-[200px] sm:w-[250px]">
          <div>
            <div className="flex py-3 px-2 hover:bg-gray-700/20 justify-between items-center cursor-pointer">
              <h2 className="text-white text-sm font-bold">
                Offical PAPA server...
              </h2>
              <ChevronDown className="stroke-gray-200 w-7 h-7" />
            </div>
            <hr className="border-discord_serverBg border-[1px] w-full" />
          </div>

          <div>
            <div className="px-2 py-3">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-400 font-bold text-lg">Channels</h3>
                <button className="group" onClick={handleAddChannel}>
                  <PlusIcon className="stroke-gray-400 w-7 h-7 group-hover:stroke-white" />
                </button>
              </div>
            </div>
            <div className="overflow-auto px-1 flex flex-col scrollbar-hide h-[73vh] text-gray-400 font-bold space-y-1">
              {channel?.docs.map((doc) => {
                return (
                  <Channel
                    key={doc.id}
                    id={doc.id}
                    channel={doc.data().channelName}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex px-2 py-3 bg-discord_serverBg/50 items-center justify-between">
            <div className="flex items-center space-x-2 ">
              <div className="bg-gray-700 rounded-full overflow-hidden">
                <img
                  src={user?.photoURL || ""}
                  alt=""
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col text-xs sm:text-sm text-white">
                <span className="font-semibold">{user?.displayName}</span>
                <span className="text-xs">#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>
            <div className="flex">
              <MicIcon className="w-6 h-6 sm:w-7 sm;h-7 stroke-gray-200 stroke-1 hover:stroke-gray-400 cursor-pointer" />
              <PhoneIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-gray-200 stroke-1 hover:stroke-gray-400 cursor-pointer" />
              <SettingsIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-gray-200 stroke-1 hover:stroke-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
