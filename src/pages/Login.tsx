import Form from "@/features/LoginForm";
import logo from "@/assets/Logo.png";

export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center  h-full">
      <img src={logo} alt="logo" className="w-10 h-10 mb-12" />
      <Form isModal={false} />
    </section>
  );
}
