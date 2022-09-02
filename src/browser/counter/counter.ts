
export function initCounter() {
  console.log('init success')

  const buttonInc = document.createElement('button')
  const buttonDec = document.createElement('button')
  const text = document.createElement('p')

  const app = document.querySelector('#app')

  app.appendChild(buttonDec)
  app.appendChild(text)
  app.appendChild(buttonInc)

  let counter = 0

  buttonDec.textContent = '-'
  text.textContent = `counter is ${counter}`
  buttonInc.textContent = '+'
 

  const onInc = () => { 
    counter++ 
    text.textContent = `counter is ${counter}`
  }

  const onDec = () => { 
    counter-- 
    text.textContent = `counter is ${counter}`
  }

  buttonInc.onclick = onInc
  buttonDec.onclick = onDec
}
