/* eslint-disable @next/next/no-img-element */
import Script from "next/script"

export default function NoCodeButton() {
  return (
    <>
      <button
        // ref={buttonRef}
        // disabled={selectedProductPrice === 0 ? true : false}
        type="submit"
        id="checkout-button"
        className=" disabled:bg-slate-400 disabled:opacity-50 mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Add to bag
      </button>
      <Script strategy="beforeInteractive" src="/embed.js"></Script>
    </>
  )
}
