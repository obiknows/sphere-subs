import Head from "next/head"
import { useRouter } from "next/router"

export default function CheckOutPage(cart: any) {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Sphere Subs - Checkout Success!</title>
      </Head>
      {/* Body */}
      <div className="mx-auto w-screen h-screen text-center">
        <h1>Checkout Successful</h1>
        <p>You may close this window </p>
      </div>
    </>
  )
}
