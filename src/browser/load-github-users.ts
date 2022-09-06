export const initLoadGithubUsers = () => {

  const title = document.createElement('h1')
  title.textContent = 'Github Users'
  const button = document.createElement('button')
  button.textContent = 'load'
  const app = document.querySelector('#app')

  app.appendChild(title)
  app.appendChild(button)
  
  button.addEventListener('click', () => loadUsers())


  const loadUsers = () => {
    fetch('https://api.github.com/users', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((res) => res.map(item => {
      return item.login
    }))
    .then((res) => addToLayout(res))
    .catch((err) => console.log(err))
  }

  const addToLayout = (arr: []) => {
    console.log(arr)

    arr.forEach(item => {
      app.innerHTML += '<li >' + item + '</li>';
    })
  }
}