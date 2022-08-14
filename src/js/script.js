const inputNumber = document.querySelector('[data-inputNumber]')
const btn = document.querySelector('.btn')
const resultWrapper = document.querySelector('.result-wrapper')
const pickedNumber = document.querySelector('[data-pickedNumber]')

btn.addEventListener('click', e => {
  let number = Math.abs(parseInt(inputNumber.value))
  const valuesArr = []

  inputNumber.value = ''

  if (isNaN(number)) return

  // Make sure that selected number is never above 1000
  if (number > 1000) {
    number = 1000
    pickedNumber.innerHTML = `Picked number was to high. Rounded down to 1000`
  } else {
    pickedNumber.innerHTML = `Picked number: ${number}`
  }

  while (number > 0) {
    let message = ''
    number % 3 === 0 ? (message = 'Fizz') : null
    number % 5 === 0 ? (message += 'Buzz') : null

    message ? valuesArr.push(message) : valuesArr.push(number)
    number--
  }

  resultWrapper.innerHTML = valuesArr
    .map(value => {
      let className = 'number'

      if (value === 'Fizz') className = 'fizz'
      if (value === 'Buzz') className = 'buzz'
      if (value === 'FizzBuzz') className = 'fizzbuzz'

      return `<span class="box ${className}">${value}</span>`
    })
    .join('')
})
