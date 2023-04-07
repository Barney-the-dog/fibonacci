// Итерационный подсчет n-го числа Фибоначчи
function getFibonacci(n) {
    let x = 1;
    let y = 1;
    for (let i = 3; i <= n; i++) {
  let z = x+y;
  x = y;
    y = z;
    }
    return y
  }
  console.log(getFibonacci(7))

// Рекурсивное вычисление n-го числа Фибоначчи
function getFibonacci(n) {
    if (n === 1) {
    return 1 
    }
    else if (n===2) {
      return 1
    } else {
      return getFibonacci(n-1)+getFibonacci(n-2)
    }
  }
console.log(getFibonacci(7))

