import Form from "@/features/SignupForm";

export default function Signup() {
  return (
    <section className="flex flex-col items-center justify-center  h-full">
      <img src="./logo.svg" alt="logo" className="w-10 h-10 mb-12" />
      <Form isModal={false} />
    </section>
  );
}
