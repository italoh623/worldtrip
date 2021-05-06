import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Features } from "../components/Features/index";
import { Separator } from "../components/Separator";
import { Call } from "../components/Call";
import { Carousel } from "../components/Carousel";

interface Continent {
  slug: string;
  title: string;
  summary: string;
  image: string;
}

export default function Home() {
  const continents: Continent[] = [
    {
      slug: "europa",
      title: "Europa",
      summary: "O continente mais antigo.",
      image: "europa"
    },
    {
      slug: "americas",
      title: "Americas",
      summary: "O continente mais antigo.",
      image: "americas"
    },
    {
      slug: "asia",
      title: "Asia",
      summary: "O continente mais antigo.",
      image: "asia"
    },
    {
      slug: "oceania",
      title: "Oceania",
      summary: "O continente mais antigo.",
      image: "oceania"
    },
    {
      slug: "africa",
      title: "África",
      summary: "O continente mais antigo.",
      image: "africa"
    },
  ]
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <Separator />
      <Call />
      <Carousel continents={continents} />
    </>
  )
}
