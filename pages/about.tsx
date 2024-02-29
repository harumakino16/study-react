import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
import { Main } from "../components/Main";



export default function About() {
  return (
    <div>
      <Header />
      <Headline page="about"/>
      <Main page="about" />
      <Footer/>
    </div>

    
  );
}