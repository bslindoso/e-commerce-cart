import convertBRLCurrency from "../utils/currency.mjs";
import { breakLine } from "../utils/print.mjs";

// CASOS DE USO

// -> ✅ adicionar item do carrinho
async function addItem(userCart, item) {
  userCart.push(item);
  console.log(`➕ Item added to cart: ${item.name} | price: ${convertBRLCurrency(item.price)} | qty: ${item.quantity}`)
}

// -> ✅ deletar item do carrinho
async function deleteItem(userCart, item) {
  const index = userCart.findIndex((i) => i.name === item.name);

  if (index !== -1) {
    userCart.splice(index, 1);
    console.log(`➖ Item deleted from cart: ${item.name} | qty: ${item.quantity} | price: ${convertBRLCurrency(item.price)}`)
  }
}

// -> ✅ remover um item by index
async function removeItemByIndex(userCart, index) {
  const deleteIndex = index - 1
  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1)
  }
}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart, item) {
  // encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name)

  // caso não encontre um item
  if (indexFound == -1) {
    console.log(`Item não encontrado`);
    return;
  }

  // item > 1 diminuir um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity--;
    return;
  }

  // item = 1 deletar um item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// -> ✅ calcular o total do carrinho
async function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal(), 0)
}

// -> ✅ exibe os itens do carrinho
async function displayCart(userCart) {

  breakLine()
  console.log(`┌──────────────────────────────────────────────┐`)
  console.log(`│             Shopee cart list                 │`)
  console.log(`├──────────────────────────────────────────────┤`)

  if (userCart.length === 0) console.log(`  (0). Empty cart`)
  userCart.forEach((item, index) => {
    const subtotal = convertBRLCurrency(item.subtotal())
    console.log(`  (${index + 1}). ${item.name} - price: ${item.price}`)
    console.log(`       qty: ${item.quantity} - subtotal: ${subtotal}`)
  });
  console.log(`├──────────────────────────────────────────────┤`)
  console.log(`  💰 Total: ${convertBRLCurrency(await calculateTotal(userCart))}`)
  console.log(`└──────────────────────────────────────────────┘`)
  breakLine()

}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  removeItemByIndex,
  displayCart,
}