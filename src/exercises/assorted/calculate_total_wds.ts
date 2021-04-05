// adopted from WebDevSimplified but using ts,
// using the Partial utility type to make props on PurchaseOptions optional
interface Item {
  price: number;
  quantity: number;
}

interface PurchaseOptions {
  discount: number;
  shipping: number;
}

const TAX_RATE = 1.1;
const SHIPPING_DEFAULT = 5;

// pretty "pro" version somehow
function calculateTotal(
  items: Item[],
  { shipping = SHIPPING_DEFAULT, discount = 0 }: Partial<PurchaseOptions> = {}
) {
  if (items.length === 0) return 0;

  const bareTotal = items.reduce((prev, item) => {
    return prev + item.price * item.quantity;
  }, 0);

  const discountRate = 1 - discount;
  const total = bareTotal * discountRate * TAX_RATE + shipping;
  return Math.floor(total * 100) / 100.0;
}

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 }
];

// some example runs
console.log(calculateTotal([], {}));
console.log(calculateTotal(testItems));
console.log(calculateTotal(testItems, {}));
console.log(calculateTotal(testItems, { shipping: 0 }));
console.log(calculateTotal(testItems, { discount: 0.25 }));
console.log(calculateTotal(testItems, { shipping: 12 }));
