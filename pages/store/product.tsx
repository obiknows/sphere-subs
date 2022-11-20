/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from "react"
import { RadioGroup } from "@headlessui/react"
import Script from "next/script"
import Head from "next/head"
import { Navbar } from "../../components/Navbar"

type Subscription = {
  name: string
  inStock: boolean
  price: number
}

const product = {
  name: "Sandwich Delivery Subscription",
  images: [
    {
      src: "https://images.unsplash.com/photo-1511421585906-57a6e6dc3a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
      alt: "A sandwich on a cutting board",
    },
    {
      src: "https://images.unsplash.com/photo-1656180384586-0f1cde47a9d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3Vic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      alt: "Many sandwiches baking",
    },
    {
      src: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Alternate photo of sandwiches on cutting board",
    },
    {
      src: "https://images.unsplash.com/photo-1511421661275-e389971ff6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Sandwiches being delivered by possibly underpaid employee",
    },
  ],
  subscriptions: [
    { name: "1 Month", inStock: true, price: 99.0 },
    { name: "3 Months", inStock: true, price: 299.99 },
    { name: "1 Year", inStock: true, price: 799.99 },
    { name: "Lifetime", inStock: true, price: 1999.99 },
  ],
  description:
    "The Sandwich Delivery Subscription allows you to fully express your love for subs. Want to get your feet wet? Get the week long subscription and taste the good life. Feeling adventurous? Get a month of subs. Want to feel like a king? Try our exclusive lifetime sandwich subscription. Love subs? Our sandwich subscriptions have you covered.",
  highlights: [
    "Hand cut fries made locally",
    "No artificial dyes",
    "Pre-baked & not pre-eaten",
    "Ultra-organic 100% wheat buns",
  ],
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export default function ProductPage() {
  // ref
  const buttonRef = useRef<HTMLButtonElement>(null)

  // state hooks
  const [selectedProductPrice, setSelectedProducePrice] = useState(0)
  const [selectedSubscription, setselectedSubscription] = useState({})

  const selectProduct = (sub: Subscription) => {
    // instead of just setting the subscription object, set the sub & price
    setselectedSubscription(sub)
    setSelectedProducePrice(sub.price)
    // also set the data attr on the button
    if (buttonRef.current) {
      buttonRef.current.setAttribute("data-sub", JSON.stringify(sub))
    }
  }

  const startCheckout = (e: React.SyntheticEvent) => {
    // prevent default form submission, our embedded js will take over from here
    console.log("form values", e.target)
    e.preventDefault()
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Sphere Subs - Sandwich Delivery Subscription</title>
      </Head>
      <Navbar />
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li className="text-sm">
                <span aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </span>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              {/* PRICE */}
              <p className="text-3xl tracking-tight text-gray-900">
                {selectedProductPrice ? <>${selectedProductPrice}</> : <>$0</>}
              </p>

              <form className="mt-10" onSubmit={startCheckout}>
                {/* Subscription Options */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Subscription Options</h3>
                  </div>

                  <RadioGroup
                    name="subscription"
                    value={selectedSubscription}
                    // onChange={setselectedSubscription}
                    onChange={selectProduct}
                    className="mt-4">
                    <RadioGroup.Label className="sr-only"> Choose a subscription </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.subscriptions.map((sub) => (
                        <RadioGroup.Option
                          key={sub.name}
                          value={sub}
                          disabled={!sub.inStock}
                          className={({ active }) =>
                            classNames(
                              sub.inStock
                                ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                : "bg-gray-50 text-gray-200 cursor-not-allowed",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }>
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">{sub.name}</RadioGroup.Label>
                              {sub.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked ? "border-indigo-500" : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor">
                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  ref={buttonRef}
                  disabled={selectedProductPrice === 0 ? true : false}
                  type="submit"
                  id="checkout-button"
                  className=" disabled:bg-slate-400 disabled:opacity-50 mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Checkout with Sphere 🌐
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SPHERE SUBS CHECKOUT EMBED */}
        <Script strategy="lazyOnload" src="/embed.js" />
      </div>
    </>
  )
}
