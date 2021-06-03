import Head from "next/head";
import Intro from '../components/intro'
import About from '../components/about'
import Contact from '../components/contact'
import dbConnect from '../utils/db-connect'
import Blog from '../components/blog'
import Footer from '../components/footer'
import BlogModel from '../models/blog'

export default function Home(props) {
  const blogs = JSON.parse(props.blogs)

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0,shrink-to-fit=no" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,700&family=Roboto:ital,wght@0,100;0,300;0,700;1,100&display=swap"
          rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
        <title>personal web site</title>



      </Head>
      <Intro />
      <About />
      <Blog blogs={blogs} />
      <Contact />
      <Footer />


    </>


  )
}
export async function getStaticProps() {
  await dbConnect();
  const res = await BlogModel.find().sort({ _id: -1 }).limit(3).exec();
  const blogs = JSON.stringify(res);
  return {
    props: {
      blogs
    }
  }
}