import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxChatBubble } from "react-icons/rx";

export default function Post({ isEdited }) {
  return (
    <div className="bg-[#27292D] border-2 border-[#35373B] rounded-lg py-6 px-5  flex flex-col gap-y-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-slate-400"></div>
          <div className="flex flex-col text-left">
            <h3 className="text-[#C5C7CA] text-lg font-medium ">
              Theresa Webb
            </h3>
            <p className="text-sm font-medium text-[#7F8084] ">
              8mins ago {Boolean(isEdited) && <span>• Edited</span>}
            </p>
          </div>
        </div>
        <BiDotsHorizontalRounded className="text-xl text-[#C5C7CA]" />
      </header>
      <main className="bg-[#191920] flex items-center rounded-lg p-4 gap-x-4 h-fit">
        <div className="rounded-full bg-[#27292D] flex items-center justify-center w-12 h-12 text-lg">
          👋
        </div>
        <p className="flex-1 text-left text-[#7F8084]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </main>
      <footer className="flex justify-start items-center gap-2">
        <RxChatBubble className="text-xl text-[#C5C7CA]" />
        <p className="text-[#7F8084] text-sm font-medium">24 comments</p>
      </footer>
    </div>
  );
}
