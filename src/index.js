/** FEEDBACK: Great job getting all of the test cases to pass! */
const incButton = document.querySelector('#add-one')

const incFunc = () => {
  let p = document.querySelector('#results')
  let num = Number(document.querySelector('#results').textContent)
  num++
  p.textContent = num
}

incButton.addEventListener('click', incFunc)