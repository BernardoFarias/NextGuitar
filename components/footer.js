import Link from "next/link"
import styles from "../styles/footer.module.css"


function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.navigation}>
          <Link href={"/"}>
            Home
          </Link>
          <Link href={"/shop"}>
            Shop
          </Link>
          <Link href={"/blog"}>
            Blog
          </Link>
          <Link href={"/about"}>
            About
          </Link>
        </nav>
        <p className={styles.copyright}>Copyright © {new Date().getFullYear()}, Next Guitar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer