export const initLoadGithubUsers = () => {
  const loadButtonId = 'load-github-users-button';
  const githubUsersTableId = 'github-users-table';

  const githubUsersContainerDiv = document.createElement('div');

  githubUsersContainerDiv!.innerHTML = `
  <hr/>
  <h2>Github users</h2>
  <div>
    <div id="${githubUsersTableId}">   
    </div>
    <button id="${loadButtonId}">load</button>
  </div>`;

  document
    .querySelector<HTMLDivElement>('#app')
    .appendChild(githubUsersContainerDiv);

  document.getElementById(loadButtonId).addEventListener('click', (event) => {
    fetch('https://api.github.com/users')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        document.getElementById(githubUsersTableId).innerHTML = json
          .map((githubUser) => {
            return `<div id="github-user-${githubUser.id}">#${githubUser.id} - ${githubUser.login}</div>`;
          })
          .join('');
      });
  });
};
