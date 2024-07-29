import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxChatBubble } from "react-icons/rx";

export interface PostProps {
  editted: boolean;
  name: string;
  timestamp: string;
  comments: number;
  emoji: string;
  description: string;
  img: string;
}
const Post: React.FC<PostProps> = ({
  editted,
  name,
  timestamp,
  comments,
  emoji,
  description,
  img,
}) => {
  return (
    <div className="bg-card border-2 border-slate-4 rounded-lg py-6 px-5  flex flex-col gap-y-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-slate-400">
            <img src={img} className="w-full h-full rounded-full" />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-slate-1 text-lg font-medium ">{name}</h3>
            <p className="text-sm font-medium text-slate-2 ">
              {timestamp} {Boolean(editted) && <span>• Edited</span>}
            </p>
          </div>
        </div>
        <BiDotsHorizontalRounded className="text-xl text-slate-1" />
      </header>
      <main className="bg-post-input flex items-center rounded-lg p-4 gap-x-4 h-fit">
        <div className="rounded-full bg-card flex items-center justify-center w-12 h-12 text-lg">
          {emoji}
        </div>
        <p className="flex-1 text-left text-slate-2">{description}</p>
      </main>
      <footer className="flex justify-start items-center gap-2">
        <RxChatBubble className="text-xl text-slate-1" />
        <p className="text-slate-2 text-sm font-medium">{comments} comments</p>
      </footer>
    </div>
  );
};
export default Post;
