import Image from "next/image"
import Link from "next/link"
import styles from "../styles/post.module.css"
import { dateFormat } from "@/utils/helpers"

const Post = ({post}) => {

    const {content, image , url, publishedAt, title} = post.attributes

    return (
    <Link href={`/posts/${url}`} >
        <article className={styles.card}>
            <Image src={image.data.attributes.formats.medium.url} width={500} height={300} alt={`Post about ${title}`} />

            <div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardPublished}>{dateFormat(publishedAt)}</p>
                <p className={styles.postDescription}>{content}</p>
            </div>
        </article>
    </Link>
    )
}

export default Post