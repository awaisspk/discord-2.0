import { DownloadIcon } from "../assets/icons";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <div className="w-full px-5 md:px-10 h-[calc(100vh-80px)]  pt-24 bg-blue-600">
      <section className="text-white flex flex-col gap-7">
        <h1 className="text-3xl md:text-5xl font-bold">Your place to talk</h1>
        <p className="max-w-[70ch] text-lg">
          Whether you’re part of a school club, gaming group, worldwide art
          community, or just a handful of friends that want to spend time
          together, Discord makes it easy to talk every day and hang out more
          often.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button varient="primary" className="py-3 md:py-4 px-5">
            <span className="flex items-center justify-center md:justify-start space-x-2">
              <DownloadIcon className="stroke-gray-600 w-6 h-6" />
              <span>Download for Mac</span>
            </span>
          </Button>
          <Button varient="secondary" className="py-3 md:py-4 px-5">
            Open Discord in your browser
          </Button>
        </div>
      </section>
    </div>
  );
};
