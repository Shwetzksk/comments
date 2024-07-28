import "./App.css";
import { FiEye } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

import { twMerge } from "tailwind-merge";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxChatBubble } from "react-icons/rx";

function App() {
  return (
    <>
      <CreatePost />
      <PostCard />
      <PostCard isEdited={true} />
    </>
  );
}

function CreatePost() {
  return (
    <div className="bg-[#27292D] border-2 border-[#35373B] rounded-lg py-6 px-5  flex flex-col gap-y-4">
      <header>
        <h3 className="text-[#C5C7CA] text-lg font-medium text-left">
          Create Post
        </h3>
      </header>
      <main className="bg-[#191920] flex items-center rounded-lg p-4 gap-x-4 h-fit">
        <div className="rounded-full bg-[#27292D] flex items-center justify-center w-12 h-12">
          💬
        </div>
        <textarea
          placeholder="How are you feeling today?"
          rows={1}
          className="resize-none w-full placeholder:text-[#7F8084] text-base focus:outline-none flex items-center h-full"
        />
      </main>
      <footer className="flex justify-end">
        <Button>Post</Button>
      </footer>
    </div>
  );
}
function PostCard({ isEdited }) {
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
function Signup() {
  return (
    <Card closeIcon={true}>
      <div>
        <p className="text-gray-4 font-medium text-sm uppercase">SIGN UP</p>
        <h3 className="font-semibold text-lg">Create an account to continue</h3>
      </div>
      <div className="flex flex-col gap-4 mb-5 mt-11">
        <Textfield label="Email" placeholder="Enter your email" />
        <Textfield label="Username" placeholder="Choose a preferred username" />
        <Textfield
          label="Password"
          type="password"
          placeholder="Choose a strong password"
          icon={<FiEye className="text-lg" />}
        />
      </div>
      <Button className="w-full">Continue</Button>
      <p className="text-gray-3 mt-3 text-left">
        Already have an account?
        <span className="text-gray-2"> Login →</span>
      </p>
    </Card>
  );
}
function Login() {
  return (
    <Card closeIcon={true}>
      <div>
        <p className="text-gray-4 font-medium text-sm uppercase">
          WELCOME BACK
        </p>
        <h3 className="font-semibold text-lg">Log into your account</h3>
      </div>
      <div className="flex flex-col gap-4 mb-5 mt-11">
        <Textfield
          label="Email or Username"
          placeholder="Enter your email or username"
        />
        <Textfield
          label={
            <div className="flex justify-between w-full">
              <p>Password</p>
              <p>Forgot Password?</p>
            </div>
          }
          type="password"
          placeholder="Enter your password"
          icon={<FiEye className="text-lg" />}
        />
      </div>
      <Button className="w-full">Login now</Button>
      <p className="text-gray-3 mt-3 text-left">
        Not registered yet? <span className="text-gray-2">Register →</span>
      </p>
    </Card>
  );
}

function Card({ closeIcon, children }) {
  return (
    <div className="max-w-md form-border bg-card rounded-lg before:before:bg-gray-300 py-10 px-6">
      {closeIcon && (
        <span className="absolute bg-bg-dark rounded-full flex justify-center items-center h-8 w-8 top-7 right-4">
          <IoCloseSharp />
        </span>
      )}
      {children}
    </div>
  );
}
function Textfield({ label, icon, ...others }) {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <label className="text-sm text-gray-2 w-full text-left">{label}</label>
      <div className="flex items-center justify-between rounded border-[1.5px] border-gray-3 w-full p-3 text-base">
        <input {...others} className=" placeholder:text-gray-3 w-full" />
        {icon && <span className="text-gray-3">{icon}</span>}
      </div>
    </div>
  );
}

function Button({ children, className }) {
  return (
    <button
      className={twMerge(
        "bg-accent text-center py-3 px-9 rounded font-semibold ",
        className
      )}
    >
      {children}
    </button>
  );
}

export default App;
