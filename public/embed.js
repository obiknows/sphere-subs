// get our checkout button
const checkoutButton = document.getElementById("checkout-button")

// TODO: restyle and construct it how we like


// add a click listener
checkoutButton.addEventListener("click", function () {
  // disable the checkout button so users don't double click
  checkoutButton.disabled = true

  // get our data object
  // console.log("checkoutButton data-sub attrs JSON string", checkoutButton.dataset.sub)
  // console.log("checkoutButton data-sub attrs base64encoded JSON string", btoa(checkoutButton.dataset.sub))
  // console.log("checkoutButton data-sub attrs JSON obj", JSON.parse(checkoutButton.dataset.sub))

  // TODO: create some sort of checksum to make sure data isn't tampered with  (base64?)
  const urlString = "http://localhost:3000/checkout?cart=" + encodeURI(checkoutButton.dataset.sub)

  // open the popup window to handle the data
  window.open(
    urlString, // in reality, this should be an external link
    "popUpWindow",
    "height=500,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
  )
})
