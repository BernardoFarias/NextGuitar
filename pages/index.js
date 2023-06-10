import Layout from '@/components/layout'
import { Inter } from 'next/font/google'
import styles from "../styles/grid.module.css"
import Guitar from '@/components/guitar'
import Post from '@/components/post'
import Course from '@/components/course'

const inter = Inter({ subsets: ['latin'] })

export default function Home({guitars, posts, course}) {

  const sixGuitars = guitars.slice(0,6)
  const threePosts = posts.slice(0,3)

  return (
    <>
      <Layout
      title={"Your Online Guitar Store"}
      description='Welcome to your online destination for high-quality acoustic, 
      electric, and bass guitars. With fast shipping, easy returns, and competitive pricing, 
       we make it easy to find your perfect guitar. Start your musical journey with us today!'
      >
      <main className={`container ${styles.taCenter}`}>
        <h1 className='heading'>Welcome to Next Guitar</h1>
        <div className={styles.grid}>
        {
          sixGuitars?.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar.attributes}
            />
          ))
        }
        </div>
      </main>
      <Course 
      course={course}
      />
      <section className={`container ${styles.taCenter}`}>
        <h2 className="heading">Blog</h2>
        <div>
            {
              threePosts.map(post => (
              <Post
              key={post.id}
              post={post}
              />
              ))
            }
          </div>
      </section>
      </Layout>
    </>

  )
}

export async function getStaticProps(){
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`
  const urlPosts = `${process.env.API_URL}/posts?populate=image`
  const urlCourse = `${process.env.API_URL}/course?populate=image`

  const [resGuitars, resPosts, resCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourse)
  ])

  const [{data: guitars}, {data: posts}, {data: course}] = await Promise.all([
    resGuitars.json(),
    resPosts.json(),
    resCourse.json()
  ])

  return {
    props: {
      guitars,
      posts,
      course
    }
  }
}
