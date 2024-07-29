import Form from "@/features/SignupForm";
import Logo from "@/assets/Logo.png";

export default function Signup() {
  return (
    <section className="flex flex-col items-center justify-center  h-full">
      <img src={Logo} alt="logo" className="w-10 h-10 mb-12" />
      <Form isModal={false} />
    </section>
  );
}
