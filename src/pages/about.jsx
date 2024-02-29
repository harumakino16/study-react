import { Footer } from "src/components/Footer";
import { Headline } from "src/components/Headline";
import { Main } from "src/components/Main";
import { Header } from "../components/Header";



export default function About() {
  return (
    <div>
      <Header />
      <Headline page="about" />
      <Main page="about" />
      <Footer />
    </div>


  );
}