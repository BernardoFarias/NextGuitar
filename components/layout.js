import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children, title = "", description = ""}) => {
  return (
    <>
      <Head>
        <title>{`Next Guitar - ${title}`}</title>
        <meta name="description" content={`Next Guitar - ${description}`} />
      </Head>

      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout