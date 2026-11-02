# Home page with gallery (app/page.tsx)

import DropTimer from "@/components/DropTimer";
import ContactForm from "@/components/ContactForm";

const products = [
  { id: 1, name: "Product 1", price: 25, image: "/product1.jpg" },
  { id: 2, name: "Product 2", price: 30, image: "/product2.jpg" },
  { id: 3, name: "Product 3", price: 20, image: "/product3.jpg" },
  { id: 4, name: "Product 4", price: 35, image: "/product4.jpg" },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">3D Print Drop</h1>
      <DropTimer />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {products.map((p) => (
          <div key={p.id} className="border rounded p-2 text-center">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
            <h2 className="font-semibold">{p.name}</h2>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
      <ContactForm />
    </main>
  );
}
