export const initUserCard = () => {
  const userFormId = 'user-form-id';
  const submitButtonId = 'user-form-submit-button';

  const inputNameId = 'user-input-name';
  const inputAgeId = 'user-input-age';
  const inputPositionId = 'user-input-position';

  const nameId = 'user-name';
  const ageId = 'user-age';
  const positionId = 'user-position';
  const container = document.createElement('div');

  container!.innerHTML = `
  <hr/>
  <h2>User card</h2>
  <div>
    <form id="${userFormId}">
      <h4>user card form</h4>
      <div class="form-item">
        <label>user name</label>
        <input id="${inputNameId}" name="name" placeholder='input name'/>
      </div>
      <div class="form-item">
        <label>user age</label>
        <input id="${inputAgeId}" name="age" placeholder='input age'/>
      </div>
      <div class="form-item">
        <label>user position</label>
        <input id="${inputPositionId}" name="position" placeholder='input position'/>
      </div>
      <button id="${submitButtonId}">submit</button>
    </form>
    <div class="card">
      <h4>card</h4>
      <div>user name is: <span id="${nameId}"></span></div>
      <div>user age is: <span id="${ageId}"></span></div>
      <div>user position is: <span id="${positionId}"></span></div>
    </div>
  </div>`;

  document.querySelector<HTMLDivElement>('#app').appendChild(container);

  document.getElementById(userFormId).addEventListener('submit', (event) => {
    event.preventDefault();
    const formData: any = new FormData(document.querySelector('form'));

    for (let entire of formData.entries()) {
      document.getElementById(`user-${entire[0]}`).innerHTML = entire[1];
    }
  });
};
