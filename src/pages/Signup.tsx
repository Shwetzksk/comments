import logo from "@/assets/logo.svg";
import Form from "@/features/signup/Form";

export default function Signup() {
  return (
    <section className="flex flex-col items-center justify-center  h-full">
      <img src={logo} alt="logo" className="w-10 h-10 mb-12" />
      <Form isModal={false} />
    </section>
  );
}
