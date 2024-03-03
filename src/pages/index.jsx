import { Footer } from "src/components/Footer";
import { Headline } from "src/components/Headline";
import { Main } from "src/components/Main";
import { Header } from "../components/Header";
import { useCallback, useEffect } from "react";

export default function Home() {
  const page = "Index";

  useEffect(() => {
    console.log("マウント")
    document.body.style.backgroundColor = "blue";
    return () => {
      console.log("アンマウント")
      document.body.style.backgroundColor = "red";
      
    }
  },[]);


  return (
    <div>
      <Header />
      <Headline page={page} />
      <button>ボタン</button>
      <Main page={page} />
      <Footer />
    </div>
  );
}