import CreatePost from "@/features/post/CreatePost";
import Post, { PostProps } from "@/features/post/Post";
import posts from "@/configs/posts.json";
import * as routes from "@/router/routes";
import { useLocation, useNavigate } from "react-router-dom";
import LoginModal from "@/features/LoginForm";
import SignupModal from "@/features/SignupForm";
import Modal from "@/components/Modal";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search).get("modal");

  return (
    <section className="w-4/5 mx-auto">
      <div className="flex flex-col gap-3 text-left mb-10">
        <h2 className="text-[#C5C7CA] font-medium text-2xl">Hello Jane</h2>
        <p className="text-[#7F8084] font-normal">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <CreatePost
          onClick={() => {
            console.log("onlciked");
            navigate(routes.MODAL_QUERY(routes.SIGNUP, location.pathname));
          }}
        />
        {posts.map((post: PostProps, i) => (
          <Post key={i} {...post} />
        ))}
      </div>

      <Modal open={params === routes.LOGIN}>
        <LoginModal isModal />
      </Modal>
      <Modal open={params === routes.SIGNUP}>
        <SignupModal isModal />
      </Modal>
    </section>
  );
}
