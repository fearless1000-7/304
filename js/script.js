let arr = [
  {
      model: 'Nissan',
      price: 55000
  },
  {
      model: 'Audi',
      price: 800000
  },
  {
      model: 'mcLaren',
      price: 300000
  },
  {
      model: 'spark',
      price: 3500
  },
  {
      model: 'Mersedes-Benz',
      price: 170000
  },
  {
      model: 'BMW',
      price: 140000
  },
  {
      model: 'Zaporozh',
      price: 1800
  },
  {
      model:'kia',
      price: 21000
  }
]

let cheap = []
let expensive = []

expensive = arr.filter(item => item.price < 350008 ? cheap.push(item): expensive.push(item))
console.log(cheap);