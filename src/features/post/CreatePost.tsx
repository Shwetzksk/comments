import Button from "@/components/Button";

type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>;
interface Props {
  onClick: (e: ButtonClickEvent) => void;
}
const CreatePost: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="bg-card border-2 border-slate-4 rounded-lg py-6 px-5  flex flex-col gap-y-4">
      <header>
        <h3 className="text-slate-1 text-lg font-medium text-left">
          Create Post
        </h3>
      </header>
      <main className="bg-post-input flex items-center rounded-lg p-4 gap-x-4 h-fit">
        <div className="rounded-full bg-card flex items-center justify-center w-12 h-12">
          💬
        </div>
        <textarea
          placeholder="How are you feeling today?"
          rows={1}
          className="resize-none w-full placeholder:text-slate-2 text-base focus:outline-none flex items-center h-full"
        />
      </main>
      <footer className="flex justify-end">
        <Button onClick={onClick}>Post</Button>
      </footer>
    </div>
  );
};
export default CreatePost;
