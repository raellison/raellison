# Contact / Order Form (components/ContactForm.tsx


"use client";
export default function ContactForm() {
  return (
    <form className="max-w-md mx-auto space-y-3" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <input name="name" placeholder="Your name" required className="w-full border p-2" />
      <input name="email" type="email" placeholder="Email" required className="w-full border p-2" />
      <textarea name="order" placeholder="What do you want to order?" required className="w-full border p-2" />
      <button type="submit" className="bg-black text-white px-4 py-2 w-full">Send Order</button>
    </form>
  );
}
