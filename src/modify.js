// These are your event handlers
const clickCounterHandler = () => {
  const button = document.querySelector('#click-button')
  button.addEventListener('click', () => {
    const counter = Number(button.target.textContent)
    button.textContent = counter++
    button.click.append(counter);
  })

};

const handleKeydown = () => {
  const tracker = document.querySelector('#keydown-tracker')
  tracker.addEventListener('click', () => {
    tracker.textContent = `You pressed ${tracker.key}`
  })
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};


// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);

  
};

main();
