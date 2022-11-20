import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script"

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Script src="../embed/dist/main.js" />
      <Component {...pageProps} />
    </>
  )
}
