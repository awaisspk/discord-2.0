import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setChannelInfo } from "../feature/channelSlice";

type Props = {
  id: string;
  channel: string;
};

export const Channel = ({ id, channel }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channel,
      })
    );

    navigate(`/channels/${id}`);
  };

  return (
    <>
      <div
        className="space-x-2 hover:bg-gray-700/20 active:bg-gray-700/30 rounded-md py-1 px-2 cursor-pointer"
        onClick={setChannel}
      >
        <span>#</span> <span>{channel}</span>
      </div>
    </>
  );
};
