import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Features } from "../components/Features/index";
import { Separator } from "../components/Separator";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <Separator />
    </>
  )
}
