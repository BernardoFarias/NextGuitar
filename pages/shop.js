import Guitar from "@/components/guitar"
import Layout from "@/components/layout"
import styles from "../styles/grid.module.css"

// export async function getStaticProps(){
//   const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
//   const {data: guitars} = await response.json()

//   return {
//     props: {
//       guitars
//     }
//   }
// }

export async function getServerSideProps(){
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
  const {data: guitars} = await response.json()

  return {
    props: {
      guitars
    }
  }
}


const Shop = ({guitars}) => {

  return (
    <Layout
    title='Shop'
    description='Discover a wide selection of high-quality acoustic, electric, and bass guitars at our 
    online guitar shop. We offer top brands at competitive prices, along with fast shipping and easy 
    returns. From beginner to pro, we have the perfect guitar for your needs. Browse our collection 
    today and start your musical journey!'
    >
    <main className="container">
      <h1 className="heading">Our collection</h1>
      <div className={styles.grid}>
      {
        guitars?.map(guitar => (
          <Guitar
            key={guitar.id}
            guitar={guitar.attributes}
          />
        ))
      }
      </div>
    </main>
    </Layout>
  )
}

export default Shop