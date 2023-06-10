import Image from "next/image"
import styles from "../../styles/product.module.css"
import Layout from "@/components/layout"
import { useState } from "react"


const Product = ({guitar, addToCart}) => {

  const [quantity, setQuantity] = useState(0)

  const {name, description, price, image} = guitar[0].attributes

  const handleSubmit = (e) => {
    e.preventDefault()

    if(quantity < 1) {
      alert("Please select a quantity")
      return
    }

    const guitarSelected = {
      id: guitar[0].id,
      image: image.data.attributes.url,
      name,
      quantity,
      price
    }

    addToCart(guitarSelected)

  }

  return (
  <Layout
  title={`Guitar ${name}`}
  >
    <div className={styles.card}>    
      <Image className={styles.cardImage}  src={image.data.attributes.url} width={250} height={350} alt={`Guitar brand ${name}`} />
      <div className={styles.cardContent}>
        <h2 className="heading">{name}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardPrice}>$ {price}</p>

        <form 
          className={styles.form}
          onSubmit={handleSubmit}
          >
          <select 
            onChange={e => setQuantity(Number(e.target.value))}
            id="quantity"
            >
            <option value="0">-- Quantity --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Add to cart" />    
        </form>

      </div>
    </div>
  </Layout>
  )
}

export default Product

// export async function getServerSideProps({query: {url}}){
//   const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
//   const {data: guitar} = await response.json()
//   return {
//     props: {
//       guitar
//     }
//   }
// }

export async function getStaticPaths(){
  const response = await fetch(`${process.env.API_URL}/guitars`)
  const {data} = await response.json()

  const paths = data.map(guitar => ({
    params: {
      url: guitar.attributes.url
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {url}}){
  const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
  const {data: guitar} = await response.json()
  return {
    props: {
      guitar
    }
  }
}