// quais ações meu carrinho pode fazer

// CASOS DE USO
// -> criar item com o subtotal
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  }
}

export default createItem;