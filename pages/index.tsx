import type { NextPage } from 'next'
import Head from 'next/head'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavTop from '../components/NavTop'
import PhoneContainer from '../components/PhoneContainer'
import SignUpDrive from '../components/SignUpDrive'
const Home: NextPage = () => {
  //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
  return (
    <div className="">
      <Head>
        <title>Bolt | Fast and Affordable Rides</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      {/* Header */}
      <Header/>
      {/*NavTop */}
      <NavTop/>
      {/* Sign Up To Drive */}
      <SignUpDrive/>
      {/* Features Block */}
      <Features/>
      <PhoneContainer/>
      <Footer/>
    </div>
  )
}

export default Home
