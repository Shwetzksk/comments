import Button from "@/components/Button";

export default function CreatePost() {
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
