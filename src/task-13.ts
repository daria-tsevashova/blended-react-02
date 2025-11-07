// Є функція reducer:

// Типізуйте state як число.
// Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
// Типізуйте функцію повністю.

type Action = "increment" | "decrement";

function reducer(state: number, action: Action): number {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
// Перевірка
console.log(reducer(10, "increment")); // 11
console.log(reducer(10, "decrement")); // 9
