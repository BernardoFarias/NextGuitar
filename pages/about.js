import Layout from '@/components/layout'
import Image from 'next/image'
import styles from "../styles/about.module.css"

const About = () => {
  return (
    <Layout
      title='About'
      description='Learn more about Next Guitar, your trusted online destination for high-quality 
      acoustic, electric, and bass guitars. Our experienced team is dedicated to providing exceptional
       customer service and support, and we work with top guitar brands to offer a wide selection of 
       instruments at competitive prices. Discover our mission, history, and team today.'
    >
      <main className={styles.about}>
      <div className={`container ${styles.contentRight}`}>
        <h2 className='heading'>
        About me
        </h2>
        <div>
          {/* <Image src={"/img/about.jpg"} width={850} height={600} alt="image about us" /> */}
          <div>
              <p className={styles.p}>
              My name is <b>Bernardo Farias</b>, and I am a front-end developer with a passion for 
              react and web development. 
              I created this website as a solo project to showcase my skills in using React, Next, and Strapi
              to build a dynamic and engaging e-commerce platform for guitar enthusiasts.
              </p>
            <p className={styles.p}>
              If you have any questions or suggestions, please do not 
              hesitate to reach out to me using the contact form on my website.
            </p>
            <p className={styles.p}>
              Thank you for visiting my website, and I hope you find the guitar of your dreams.
            </p>
          </div>
        </div>
      </div>
      </main>
    </Layout>

  )
}

export default About