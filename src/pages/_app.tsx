import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from 'styles/app.module.css'
import Nav from 'components/frame/Nav'
import Footer from 'components/frame/Footer'
import { wrapper } from 'modules/store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.main}>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  )
  
}

export default wrapper.withRedux(MyApp) 
