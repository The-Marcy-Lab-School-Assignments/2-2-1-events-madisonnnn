// These are your event handlers 
const button = document.getElementById('click-button')
const clickCounterHandler = () => {
 
  let counter = Number(button.getAttribute('data-clicks'))
  counter++

  button.setAttribute('data-clicks', counter)

  if (counter === 1){
    button.textContent = `I've been clicked ${counter} time.`
  } else {
  button.textContent = `I've been clicked ${counter} times!`
  }
};

const button2 = document.getElementById('inline-example')
const clickCounterHandlerInline = () => {
 
  let counter = Number(button2.getAttribute('data-clicks'))
  counter++

  button2.setAttribute('data-clicks', counter)

  if (counter === 1){
    button2.textContent = `I've been clicked ${counter} time.`
  } else {
  button2.textContent = `I've been clicked ${counter} times!`
  }
};

const handleKeydown = (event) => {
  const tracker = document.querySelector('#keydown-tracker')
  let key =  event.code
  tracker.textContent = `You pressed ${key}`
  
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  if(event.target.matches('#up') || event.target.matches('#middle') ||event.target.matches('#down') || event.target.matches('#left') || event.target.matches('#right')){
      resultSpan.textContent = event.target.textContent;
  } else {
    console.log('not a button')
  }
};

const removeButton = document.querySelector('#remove')

const removeDelListener = () => {
  delegation.removeEventListener('click', handleDelegation)
}


const addNewRandomNumber = () => {
  const randomNum = document.querySelector('#add-random-num')
  const randomNumUL = document.querySelector('#random-numbers')

  const li = document.createElement('li')
  const randomNumberGenerator = Math.floor(Math.random() * 100)
  li.innerText = randomNumberGenerator
  randomNumUL.append(li)
};


// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);

  const buttonContainer = document.querySelector('#click-button')
  buttonContainer.addEventListener('click', clickCounterHandler)

  const buttonContainer2 = document.querySelector('#inline-example')
  buttonContainer2.addEventListener('click', clickCounterHandlerInline)
  
  document.body.addEventListener('keydown', handleKeydown)

  removeButton.addEventListener('click', removeDelListener)

};

main();

