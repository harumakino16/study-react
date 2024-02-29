import { Footer } from "src/components/Footer";
import { Headline } from "src/components/Headline";
import { Main } from "src/components/Main";
import { Header } from "../components/Header";



export default function Home() {
  const page = "Index";
  return (
    <div>
      <Header />
      <Headline page={page} />
      <Main page={page} />
      <Footer />
    </div>


  );
}
