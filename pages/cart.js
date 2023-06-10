import { useEffect, useState } from 'react'
import Layout from '@/components/layout'
import styles from "../styles/cart.module.css"
import Image from 'next/image'
import deleteImage from "../public/img/deleteIcon.svg"


const Cart = ({cart, updateQuantity, deleteGuitar}) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalCart = cart.reduce( (total, guitar) => total + (guitar.quantity * guitar.price), 0)
        setTotal(totalCart)
    }, [cart])

  return (
    <Layout
    title="Shopping cart"
    >
        <main className='container'>
            <h1 className='heading'>My Cart</h1>
            <div className={styles.content}>
                <div className={styles.cart}>
                    <h2>Products</h2>
                    {cart.length === 0 
                        ? "Cart empty" 
                        : (cart.map(guitar => (
                            <div key={guitar.id} className={styles.product}>
                                <div>
                                    <Image alt={guitar.name}src={guitar.image} width={250} height={480} />
                                </div>
                                <div>
                                    <p className={styles.name}>{guitar.name}</p>
                                    <div className={styles.quantity}>
                                        <p>Quantity: </p>

                                        <select 
                                            className={styles.select}
                                            onChange={e => updateQuantity({
                                                id: guitar.id,
                                                quantity: e.target.value})}
                                            value={guitar.quantity}
                                        >
                                        <option value="1">1 Guitar</option>
                                        <option value="2">2 Guitars</option>
                                        <option value="3">3 Guitars</option>
                                        <option value="4">4 Guitars</option>
                                        <option value="5">5 Guitars</option>
                                        </select>
                                    </div>

                                    <p className={styles.subtotal}> $ <span>{guitar.price}</span></p>
                                    <p> Subtotal: $ <span>{guitar.quantity * guitar.price}</span></p>
                                </div>
                                <button
                                className={styles.btnDelete}
                                onClick={() => deleteGuitar(guitar.id)}
                                >
                                    <Image src={deleteImage} alt="delete icon" />
                                </button>
                            </div>
                        )))
                    }
                </div>
                <aside className={styles.resume}>
                    <h3>Order summary</h3>
                        <p>
                            Total: $ {total}
                        </p>
                </aside>
            </div>
        </main>
    </Layout>
 
  )
}

export default Cart