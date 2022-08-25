function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(++counter));
  setCounter(0);
}

export const initCounter = () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Counter</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
};
