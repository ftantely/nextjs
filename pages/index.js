import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        dolorem fugiat odit possimus praesentium suscipit tempora veniam.
        Aliquid beatae eos est fuga fugiat molestias nihil numquam, officiis
        recusandae repellat totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        dolorem fugiat odit possimus praesentium suscipit tempora veniam.
        Aliquid beatae eos est fuga fugiat molestias nihil numquam, officiis
        recusandae repellat totam!
      </p>
      <Link href="/ninjas">See Ninja Listing</Link>
    </div>
  );
}
