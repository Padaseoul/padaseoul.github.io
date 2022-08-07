import "../styles/common.scss"
import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Main from "../components/Main"
import { SEO } from "../components/SEO"


const IndexPage = () => {
  return (
    <>
    <Header />
    <main>
      <Main />
    </main>
    <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)