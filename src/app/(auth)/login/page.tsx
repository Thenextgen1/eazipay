import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "EaziPay | Login",
};

export default function Login() {
  return (
    <main className="max-w-sm mx-auto">
      <section>
        <Form />
      </section>
    </main>
  );
}
