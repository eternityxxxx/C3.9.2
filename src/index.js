
const checkBoxOne = document.querySelector('#Checkbox1');
const checkBoxTwo = document.querySelector('#Checkbox2');
const checkBoxThree = document.querySelector('#Checkbox3');
const checkBoxFour = document.querySelector('#Checkbox4');
const checkBoxFive = document.querySelector('#Checkbox5');
const checkBoxSix = document.querySelector('#Checkbox6');


const getCookie = (name) => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


document.addEventListener('DOMContentLoaded', () => {
  if (getCookie('check1')) {
    checkBoxOne.checked = true;
  }
  if (getCookie('check2')) {
    checkBoxTwo.checked = true;
  }
  if (getCookie('check3')) {
    checkBoxThree.checked = true;
  }
  if (getCookie('check4')) {
    checkBoxFour.checked = true;
  }
  if (getCookie('check5')) {
    checkBoxFive.checked = true;
  }
  if (getCookie('check6')) {
    checkBoxSix.checked = true;
  }
});

checkBoxOne.addEventListener('change', () => {
  if (checkBoxOne.checked) {
    document.cookie = 'check1=yes; max-age=31536000';
  }
  else {
    document.cookie = 'check1=yes; max-age=0';
  }
});
checkBoxTwo.addEventListener('change', () => {
  if (checkBoxTwo.checked) {
    document.cookie = 'check2=yes; max-age=31536000';
  }
  else {
    document.cookie = 'check2=yes; max-age=0';
  }
});
checkBoxThree.addEventListener('change', () => {
  if (checkBoxThree.checked) {
    document.cookie = 'check3=yes; max-age=31536000';
  }
  else {
    document.cookie = 'check3=yes; max-age=0';
  }
});
checkBoxFour.addEventListener('change', () => {
  if (checkBoxFour.checked) {
    document.cookie = 'check4=yes; max-age=31536000';
  }
  else {
    document.cookie = 'check4=yes; max-age=0';
  }
});
checkBoxFive.addEventListener('change', () => {
  if (checkBoxFive.checked) {
    document.cookie = 'check5=yes; max-age=31536000';
  }
  else {
    document.cookie = 'check5=yes; max-age=0';
  }
});
checkBoxSix.addEventListener('change', () => {
  if (checkBoxSix.checked) {
    document.cookie = 'check6=yes; max-age=31536000';
  }
  else {
    document.cookie = 'check6=yes; max-age=0';
  }
});
