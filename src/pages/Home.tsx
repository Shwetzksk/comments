import CreatePost from "@/features/CreatePost";
import Post from "@/features/Post";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col gap-3 text-left mb-10">
        <h2 className="text-[#C5C7CA] font-medium text-2xl">Hello Jane</h2>
        <p className="text-[#7F8084] font-normal">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <CreatePost />
        <Post />
      </div>
    </section>
  );
}
