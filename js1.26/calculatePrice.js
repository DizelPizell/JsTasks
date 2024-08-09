function calculatePrice(order = []) {
    const prices = order.map(order => order.price || 0);
    return prices.reduce((total, price) => total + price, 0);
}

const data = [
  { type: 'food', price: 130 },
  { type: 'clothes', price: 7300 },
  { type: 'other', price: 1400 }
];
console.log(calculatePrice(data)); 
