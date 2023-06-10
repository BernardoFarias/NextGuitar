import Layout from '@/components/layout'
import { dateFormat } from "@/utils/helpers"
import styles from "../../styles/blog.module.css"
import Image from 'next/image'

const Blog = ({post}) => {

  const {title, content, image, publishedAt} = post[0].attributes

  return (
    <Layout
      title={title}
      description={content}
    >
        <article className={`${styles["mt-3"]} ${styles.post}`}>
            <Image src={image.data.attributes.formats.medium.url} width={1000} height={400} alt={`Post about ${title}`} />

            <div className={styles.content}>
                <h3>{title}</h3>
                <p className={styles.date}>{dateFormat(publishedAt)}</p>
                <p className={styles.text}>{content}</p>
            </div>
        </article>
    </Layout>

  )
}

export default Blog

export async function getServerSideProps({query: {url}}){
  const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
  const {data: post} = await response.json()
  return {
    props: {
      post
    }
  }
}