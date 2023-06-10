import Layout from "@/components/layout"
import Link from "next/link"

const Page404 = () => {
  return (
    <Layout
    title="Page Not Found"
    >
        <p className="error">Page not found</p>
        <Link className="errorButton" href={"/"}>Return to home</Link>
    </Layout>
 
  )
}

export default Page404