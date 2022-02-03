import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="HomePage">
      <div className="px-4 flex flex-col items-center my-24 gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center">
        <h1 className="text-center font-black text-7xl md:text-8xl text-knicksBlue">
          CHECK <span className="text-knicksOrange -rotate-6"> THIS</span> ONE
        </h1>
        <div className="bg-knicksBlue w-full px-8 py-16 bubble text-center">
          <p className="text-2xl md:text-4xl">
            I am glad to show you my first
            <span className="text-knicksOrange"> personal</span> project.
          </p>{" "}
          <br />
          <p className="text-2xl md:text-4xl">
            Create a website that would allow me to share my
            <span className="text-knicksOrange"> recommendations </span>
            about movies, series, Youtube channels that I am use to spread
            around me...
          </p>{" "}
          <br />
          <p className="text-3xl md:text-6xl">
            And maybe more in the
            <span className="text-knicksOrange"> future</span>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
