import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import "./style.css"

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const copyTranferenceArea = document.querySelector('h3');

const removeClassNone = () => {
  copyTranferenceArea.classList.add("none")
}

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
  copy(randomPassword);
  copyTranferenceArea.classList.remove("none");
  setTimeout(removeClassNone, 3000);
});
