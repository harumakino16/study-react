import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
import { Main } from "../components/Main";
import { Header } from "../components/Header";



export default function Home() {
  const page = "Index";
  return (
    <div>
      <Header />
      <Headline page={ page} />
      <Main page={ page} />
      <Footer/>
    </div>

    
  );
}
