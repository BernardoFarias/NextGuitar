import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/header.module.css"
import { useRouter } from 'next/router'

function Header({cart}) {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={`container ${styles.bar}`}>
                <Link href={"/"}>
                <Image src={"/img/logo2.png"} width={150} height={40} alt="image logo" className={styles.logo}/>
                </Link>
                <nav className={styles.navigation}>
                    <Link href={"/"} className={router.pathname === "/" ? styles.active : ""}>
                        Home
                    </Link>
                    <Link href={"/shop"} className={router.pathname === "/shop" ? styles.active : ""}>
                        Shop
                    </Link>
                    <Link href={"/blog"} className={router.pathname === "/blog" ? styles.active : ""}>
                        Blog
                    </Link>
                    <Link href={"/about"} className={router.pathname === "/about" ? styles.active : ""}>
                        About
                    </Link>
                    <Link href={"/cart"}>
                        <Image src="/img/cart.png" alt="cart image" width={30} height={25}/>
                        {cart?.length > 0 ? <span className={styles.inCart}>{cart.length}</span> : null}   
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header