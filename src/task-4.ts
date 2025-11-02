// Опис: Є масив, який містить розміри екрана у пікселях.

// Завдання:

// Додайте до змінної dimensions явну типізацію.
// Переконайтеся, що TypeScript не дозволяє додавати до масиву значення інших типів (наприклад, рядки).

const dimensions: Array<number> = [1920, 1080];
console.log(dimensions);

const dimensions2: number[] = [1920, 1080];
console.log(dimensions2);
