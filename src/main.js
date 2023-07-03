import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const copyTranferenceArea = document.querySelector('h3');
const timeToDisapearTranferenceArea = 3000;

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
  copy(randomPassword);
  copyTranferenceArea.classList.remove('none');
  setTimeout(() => copyTranferenceArea.classList.add('none'), timeToDisapearTranferenceArea);
});
