import Layout from '../components/Layout'
import '../styles/globals.css'
import "./404"

function MyApp({ Component, pageProps }) {
  return (
    
   <>
    <Layout> </Layout>
    <Component {...pageProps} />
   
    </>
 
   
  )
    
   
  
 
}

export default MyApp
