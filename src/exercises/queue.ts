interface Customer {
  name: string;
  age: number;
  isMember: boolean;
  rewardCard?: boolean;

}

export class Queue<T> {
  private queue: T[];
  private length: number;
  private readonly maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize > 0 ? maxSize : 10;
    this.length = 0;
    this.queue = new Array<T>();
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.length === this.maxSize;
  }

  enqueue(newItem: T) {
    if (this.isFull()) {
      return;
    }
    this.queue[this.length++] = newItem;
  }

  dequeue(): T | void {
    if (this.isEmpty()) {
      return;
    }
    const retVal = this.queue[0];

    for (let i = 0; i < this.length; i++) {
      this.queue[i] = this.queue[i + 1];
    }

    this.length--;
    return retVal;
  }

  peek(): T | void {
    if (this.isEmpty()) {
      return;
    }
    return this.queue[0];
  }

  queueContents() {
    for (const item of this.queue) {
      console.log(item);
    }
  }
}

function customerFactory(name: string, age: number, isMember: boolean, rewardCard: boolean = false) {
  return {
    name,
    age,
    isMember,
    rewardCard
  };
}


const customer1 = customerFactory('jimmy', 18, true);
const customer2 = customerFactory('kevin', 45, false);
const customer3 = customerFactory('maggie', 25, true);
const customer4 = customerFactory('taylor', 34, false);

const checkoutLine = new Queue<Customer>(10);
checkoutLine.enqueue(customer1);
checkoutLine.enqueue(customer2);
checkoutLine.enqueue(customer3);
checkoutLine.enqueue(customer4);

checkoutLine.queueContents();
