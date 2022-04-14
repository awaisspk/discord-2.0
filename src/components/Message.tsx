import moment from "moment";

type MessageProps = {
  id: string;
  message: string;
  name: string;
  photoUrl: string;
  email: string;
  timestamp: any;
};
export const Message = ({
  id,
  message,
  timestamp,
  email,
  photoUrl,
  name,
}: MessageProps) => {
  return (
    <div className="flex flex-col py-2">
      <div className="flex space-x-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={photoUrl} alt="" />
        </div>
        <div className="flex  space-x-2">
          <span className="capitalize font-semibold">{name}</span>
          <span className="text-gray-400 text-sm mt-0.5">
            {moment(timestamp?.seconds * 1000)
              .toDate()
              .toDateString()}
          </span>
        </div>
      </div>
      <p className="ml-12 -mt-4">{message}</p>
    </div>
  );
};
