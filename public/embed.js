//
const checkoutButton = document.getElementById("checkout-button")

// add a click listener
checkoutButton.addEventListener("click", function () {
  console.log("we've clicked our checkout button")
  console.log("checkoutButton", checkoutButton)
  console.log("checkoutButton attrs", checkoutButton.attributes)
})

// add an event handler that checks if

// TODO: test this
// window.open(
//   "/checkout",
//   "popUpWindow",
//   "height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
// )
