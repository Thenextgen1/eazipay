import Hero from "./components/Hero";
import LineChart from "./components/LineChart";
import Search from "./components/Search";

export default function Dashboard() {
  return (
    <main className="lg:pl-80 lg:pr-12 px-4 sm:px-6 xl:pr-24 lg:z-[100] relative">
      <section className="mt-12">
        <h2 className="text-[#292A29] text-2xl font-bold sm:text-4xl">
          Welcome Abasiama
        </h2>
        <p className="font-medium text-eaziDark my-3">
          Pay and manage your employee in minutes
        </p>
      </section>
      <section className="mt-8">
        <Hero />
      </section>
      <section className="mt-12">
        <LineChart />
      </section>
      <section className="mt-12">
        <Search />
      </section>
    </main>
  );
}
