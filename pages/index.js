import Head from "next/head"

import Header from "components/header/Header"
import NavBar from "components/nav-bar/NavBar"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NavBar />
    </div>
  )
}

export default Home
