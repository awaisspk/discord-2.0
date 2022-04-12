export const ServerIcon = ({ image }: { image: string }) => {
  return (
    <>
      <img
        alt=""
        src={image}
        className="h-10 w-10 sm:h-12 sm:w-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl"
      />
    </>
  );
};
