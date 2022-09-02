
export function initUserCard() {

  const container = document.createElement('div')
  const app = document.querySelector('#app')

  container.innerHTML = `
  <h1>User card</h1>
  <p>user card form</p>
  <form id="user-form-id">
    <h4>user card form</h4>
    <div class="form-item">
      <label>user name</label>
      <input id="user-input-name" name="name" placeholder="input name">
    </div>
    <div class="form-item">
      <label>user age</label>
      <input id="user-input-age" name="age" placeholder="input age">
    </div>
    <div class="form-item">
      <label>user position</label>
      <input id="user-input-position" name="position" placeholder="input position">
    </div>
    <button id="user-form-submit-button">submit</button>
  </form>

  <div class="card">
    <h4>card</h4>
    <div>user name is: <span id="user-name"></span></div>
    <div>user age is: <span id="user-age"></span></div>
    <div>user position is: <span id="user-position"></span></div>
  </div>
  `

  app.appendChild(container)

  const form = container.querySelector('#user-form-id') as any
  const cardName = app.querySelector('#user-name')
  const ageName = app.querySelector('#user-age')
  const positionName = app.querySelector('#user-position')

  form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    cardName.textContent = form.elements.name.value
    ageName.textContent = form.elements.age.value
    positionName.textContent = form.elements.position.value

  })
}