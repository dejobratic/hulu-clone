import Head from "next/head"

import Header from "components/header/Header"
import NavBar from "components/nav-bar/NavBar"
import Shows from "components/shows/Shows"

import { showsService } from "services/ShowsService"

const Home = ({ shows }) => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NavBar />
      <Shows shows={shows} />
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const shows = await showsService.getByGenre(genre)
  return { props: { shows } }
}
