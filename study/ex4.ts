type SuperPrint = {
  <T, M>(arr: T[], b: M): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4], "");
superPrint([true, false, false, true], 20);

function prepend<T>(arr: T[], item: T) {
  return [item, ...arr];
}

console.log(prepend([1, 2, 3], 4));

function p(arr, item) {
  return [item, ...arr];
}

console.log(p([1, 2, 3], 4));
