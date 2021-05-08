import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";

export default function Continent() {
  return (
    <>
      <Head>
        <title>WorldTrip | Europa</title>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>

      <Header />
      <ContinentBanner />

      <Flex
        direction="column"
        maxW="1160px"
        mx="auto"
        px="1rem"
      >
        <Content />
      </Flex>
    </>
  )
}
