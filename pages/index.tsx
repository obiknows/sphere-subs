import Head from "next/head"
import Script from "next/script"

export default function Home() {
  return (
    <div>
      <Head>
        <title>SPHERE SUBS</title>
      </Head>
      <h1 className="text-3xl font-bold underline">SPHERE SUBS 🌐🚇</h1>
      {/* Our test embed checkout */}
      <Script src="./embed.js" />
    </div>
  )
}
