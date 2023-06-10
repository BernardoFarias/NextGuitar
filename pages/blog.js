import Layout from "@/components/layout"
import Post from "@/components/post"

const Blog = ({posts}) => {

  return (
    <Layout
    title='Blog'
    description="Explore the world of guitars with our informative and entertaining blog. 
    From gear reviews to industry news, our team of experts covers everything you need to know about 
    guitars. Whether you're a beginner or a seasoned pro, our blog has something for you. Join our
     community of guitar enthusiasts and take your playing to the next level! "
    >
      <main className="container">
        <h1 className="heading">Blog</h1>
        <div>
          {
            posts.map(post => (
            <Post
            key={post.id}
            post={post}
            />
            ))
          }
        </div>
      </main>
    
    </Layout>
  )
}

export default Blog

export async function getStaticProps(){
  const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
  const {data: posts} = await response.json()
  return {
    props: {
      posts
    }
  }
}