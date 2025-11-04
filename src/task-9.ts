// Завдання:

// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.

interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T;
}

class ArrayContainer<T> {
  items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T {
    return this.items[index];
  }
}

// 2. Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.

const numberContainer: Container<number> = new ArrayContainer<number>();
const stringContainer: Container<string> = new ArrayContainer<string>();

// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

numberContainer.addItem(5);
numberContainer.addItem(10);
console.log(numberContainer.items); // [5, 10]
console.log(numberContainer.getItem(1)); // 10

stringContainer.addItem("Hello");
stringContainer.addItem("World");
console.log(stringContainer.items); // ["Hello", "World"]
console.log(stringContainer.getItem(0)); // "Hello"

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

function getLastElement<T>(items: T[]): T {
  return items[items.length - 1];
}

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).
// Примітка:
// Контейнер має підтримувати тільки один тип елементів.

console.log(getLastElement(numberContainer.items)); // 10
console.log(getLastElement(stringContainer.items)); // "World"
