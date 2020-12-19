const LinkedList = require('./linked-list');

describe('#insertAtHead', () => {
  test('adds an element to the start of the list', () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});


describe('#getByIndex', () => {
  describe('with index < 0', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();

    });
  });

  describe('with index >= list length', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(5)).toBeNull();

    });
  });

  describe('with index 0', () => {
    test('returns head', () => {

      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(0)).toBe(10);
    });
  });

  describe('with index in the middle', () => {
    test('returns element at index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40, 50);

      expect(ll.getByIndex(3)).toBe(40);
    });
  });
});


describe('#insertAtIndex', () => {
  describe('with index < 0', () => {
    test('does not insert anything', () => {
      const ll = LinkedList.fromValues(20, 20, 20);
      ll.insertAtIndex(-2, 10);

      expect(ll.length).toBe(3);
    });

  });

  describe('with index >= list length', () => {
    test('does not insert anything', () => {
      const ll = LinkedList.fromValues(10, 20, 30);

      expect(ll.length).toBe(3);
    });
  });

  describe('with index 0', () => {
    test('increases list length, replaces head', () => {
      const ll = LinkedList.fromValues(1, 2, 3);
      ll.insertAtIndex(0, 10);

      expect(ll.head.value).toBe(10);
      expect(ll.head.next.value).toBe(1);
      expect(ll.length).toBe(4);
    });
  });

  describe('with index in the middle', () => {
    test('it ', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      const value = ll.getByIndex(2);

      expect(value).toBe(50);
      expect(ll.length).toBe(5);

    });
  });
});


describe('#removeAtHead', () => {
  test('removes element at head', () => {
    const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
    ll.removeAtHead();

    expect(ll.head.value).toBe(20);
    expect(ll.length).toBe(4);
  });
});


describe('#removeAtIndex', () => {
  describe('with index < 0', () => {
    test('removes nothing', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index >= list length', () => {
    test('removes nothing', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(8);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index 0', () => {
    test('removes head', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(0);

      expect(ll.length).toBe(1);
      expect(ll.head.value).toBe(20);

    });
  });

  describe('with index in middle or at end', () => {
    test('removes element at index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
      ll.removeAtIndex(2);
      const value = ll.getByIndex(2);

      expect(value).toBe(40);
      expect(ll.length).toBe(4);
    });
  });
});