import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"
import convertBRLCurrency from "./utils/currency.mjs"

const myCart = []
const myWishList = []

console.log("===========================")
console.log("Welcome to the Shopee Cart!")
console.log("===========================\n")

// ITEMS
const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

// CART
// adiciona 2 itens ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)



// const totalCart = convertBRLCurrency(await cartService.calculateTotal(myCart))
// console.log(`Total Cart: ${totalCart}`)

// remove um item pelo índice exibido no carrinho
// await cartService.removeItemByIndex(myCart, 1)

// deleta 2 itens do carrinho
// await cartService.deleteItem(myCart, item1)
// await cartService.deleteItem(myCart, item2)
// await cartService.displayCart(myCart)


// WISHLIST
// await cartService.addItem(myWishList, item2)
// const totalWishList = convertBRLCurrency(await cartService.calculateTotal(myWishList))
// console.log(`Total WishList: ${totalWishList}`)