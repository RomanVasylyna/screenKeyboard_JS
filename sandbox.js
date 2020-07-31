
//Creating Keyboard
function initKeyboard() {
let keys = keyboardKeys(); //Array of Keys
addKeysRows(keys); //Creating Keys
addEvent(); //Adding Onclick Event to Each Key
specialKeys();
}

//Toggle Russian and English Keyboard
function changeLang() {
let keyboardKeys = document.querySelectorAll('.key');

for(let i = 0; i < keyboardKeys.length; i++) {
if(keyboardKeys[i].classList.contains('key-rus')) {
clearField();
initKeyboard();
} else if(keyboardKeys[i].classList.contains('key-eng')) {
  let keys = keyboardRusKeys(); //Array of Keys
  clearField(); //Completely Clear Keyboard
  addRusKeysRows(keys); //Create Rus Keyboard
  addEventTwo(); //Adding Onclick Event to Each Key
  specialKeysRus();  //Special Keys Event
}
}
}

//Clear Parent
function clearField() {
document.querySelector('.keyboard-one').innerHTML = '';
document.querySelector('.keyboard-two').innerHTML = '';
document.querySelector('.keyboard-three').innerHTML = '';
document.querySelector('.keyboard-four').innerHTML = '';
document.querySelector('.keyboard-five').innerHTML = '';
}

//Keys Array
function keyboardKeys() {
let keys = ['1','2','3','4','5','6','7','8','9','0','Del','&#8592', 'CapsLock', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','Enter','Rus',
'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '@', 'Space'];
return keys;
}

//Russian Array Keys
function keyboardRusKeys() {
let keys = ['1','2','3','4','5','6','7','8','9','0','Del','&#8592', 'CapsLock', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ','Eng',
'ф', 'ы', 'в', 'а', 'п', 'р', 'о','л', 'д','ж', 'э','Enter',
'я', 'ч', 'c', 'м', 'и', 'т', 'ь', ,'б', 'ю', ',', '.', '@', 'Space'];
return keys;
}

//Add Rows of Keys
function addKeysRows(keys) {
  addFirstRow(keys);
  addSecondRow(keys);
  addThirdRow(keys);
  addFourthRow(keys);
  addFifthRow(keys);
}

//Add Rows of Keys Rus
function addRusKeysRows(keys) {
  addRusFirstRow(keys);
  addRusSecondRow(keys);
  addRusThirdRow(keys);
  addRusFourthRow(keys);
  addRusFifthRow(keys);
}

//Add Onclick Event and Class
function addEvent() {
let keys = document.querySelectorAll('a');
for(let i = 0; i < keys.length; i++) {
keys[i].addEventListener('click', displayKey);
keys[i].classList.add('key');
keys[i].classList.add('key-eng');
}
}

//Adding Second Event
function addEventTwo() {
let keys = document.querySelectorAll('a');
for(let i = 0; i < keys.length; i++) {
keys[i].addEventListener('click', displayKeyRus);
keys[i].classList.add('key');
keys[i].classList.add('key-rus');
}
}

//Displaying Each Key in Input Field
function displayKey() {
let input = document.querySelector('textarea');
(this.innerHTML != 'Del' && this.innerHTML != '←'
&& this.innerHTML != 'CapsLock' && this.innerHTML != 'Enter'
&& this.innerHTML != 'Rus' && this.innerHTML != 'Space') ? input.value += this.innerHTML : console.log('Special Key Was Pressed');
}

//Displaying Each Key in Input Field
function displayKeyRus() {
let input = document.querySelector('textarea');
(this.innerHTML != 'Del' && this.innerHTML != '←'
&& this.innerHTML != 'CapsLock' && this.innerHTML != 'Enter'
&& this.innerHTML != 'Eng' && this.innerHTML != 'Space') ? input.value += this.innerHTML : console.log('Special Key Was Pressed');
}



//Special Keys Event
function specialKeys() {
  let input = document.querySelector('textarea');
  let keys = document.querySelectorAll('.key-eng');
  for(let i = 0; i < keys.length; i++) {
  switch(keys[i].innerHTML) {

  case 'Del':
  keys[i].addEventListener('click', function() {
  input.value = '';
  })
  break;

  case '←':
  keys[i].addEventListener('click', function() {
  input.value = input.value.substring(0, input.value.length - 1);
  })
  break;

  case 'CapsLock':
  keys[i].addEventListener('click', toggleCapsLock);
  keys[i].classList.add('active');
  break;

  case 'Space':
  keys[i].addEventListener('click', function() {
  input.value  += ' ';
  })
  break;

  case 'Enter':
  keys[i].addEventListener('click', function() {
  input.value += "\n";
  })
  break;

  case 'Rus':
  keys[i].addEventListener('click', changeLang);
  break;
  }
  }
}

//Special Keys Event
function specialKeysRus() {
  let input = document.querySelector('textarea');
  let keys = document.querySelectorAll('.key-rus');
  for(let i = 0; i < keys.length; i++) {
  switch(keys[i].innerHTML) {

  case 'Del':
  keys[i].addEventListener('click', function() {
  input.value = '';
  })
  break;

  case '←':
  keys[i].addEventListener('click', function() {
  input.value = input.value.substring(0, input.value.length - 1);
  })
  break;

  case 'CapsLock':
  keys[i].addEventListener('click', toggleCapsLockRus);
  keys[i].classList.add('active');
  break;

  case 'Space':
  keys[i].addEventListener('click', function() {
  input.value  += ' ';
  })
  break;

  case 'Enter':
  keys[i].addEventListener('click', function() {
  input.value += "\n";
  })
  break;

  case 'Eng':
  keys[i].addEventListener('click', changeLang);
  break;
  }
  }
}


//Capslock on/off
function toggleCapsLock() {
  let keys = document.querySelectorAll('.key-eng');
  for(let i = 0; i < keys.length; i++) {
  if(keys[i].innerHTML != 'Enter'
  && keys[i].innerHTML != 'Rus'
  && keys[i].innerHTML != 'Space'
  && keys[i].innerHTML != 'Del'
  && keys[i].innerHTML != 'CapsLock'
   ) {
  keys[i].classList.toggle('capslock');
  }
  }
  checkCaps();
}

//Capslock on/off
function toggleCapsLockRus() {
  let keys = document.querySelectorAll('.key-rus');
  for(let i = 0; i < keys.length; i++) {
  if(keys[i].innerHTML != 'Enter'
  && keys[i].innerHTML != 'Eng'
  && keys[i].innerHTML != 'Space'
  && keys[i].innerHTML != 'Del'
  && keys[i].innerHTML != 'CapsLock'
   ) {
  keys[i].classList.toggle('capslock');
  }
  }
  checkCapsRus();
}

//Check if Caps is On
function checkCaps() {
  let keys = document.querySelectorAll('.key-eng');
  for(let i = 0; i < keys.length; i++) {
    if(keys[i].classList.contains('capslock')) {
    keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
  } else if(keys[i].innerHTML != 'Enter' &&
            keys[i].innerHTML != 'Del' &&
            keys[i].innerHTML != 'Space' &&
            keys[i].innerHTML != 'CapsLock' &&
            keys[i].innerHTML != 'Rus'
        ) {
  keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
  }
}
}

//Check if Caps is On
function checkCapsRus() {
  let keys = document.querySelectorAll('.key-rus');
  for(let i = 0; i < keys.length; i++) {
    if(keys[i].classList.contains('capslock')) {
    keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
  } else if(keys[i].innerHTML != 'Enter' &&
            keys[i].innerHTML != 'Del' &&
            keys[i].innerHTML != 'Space' &&
            keys[i].innerHTML != 'CapsLock' &&
            keys[i].innerHTML != 'Eng'
        ) {
  keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
  }
}
}


//Add first row of keys
function addFirstRow(keys) {
let parent = document.querySelector('.keyboard-one');
  for(let i = 0; i < 12; i++) {
  let key = document.createElement('a');
  key.innerHTML = keys[i];
  parent.appendChild(key);
  }
}

//Add second row of keys
function addSecondRow(keys) {
let parent2 = document.querySelector('.keyboard-two');
  for(let i = 12; i < 24; i++) {
  let key = document.createElement('a');
  key.innerHTML = keys[i];
  parent2.appendChild(key);
  }
}

//Add third row of keys
function addThirdRow(keys) {
let parent3 = document.querySelector('.keyboard-three');
  for(let i = 24; i < 34; i++) {
  let key = document.createElement('a');
  key.innerHTML = keys[i];
  parent3.appendChild(key);
  }
}

//Add fourth row of keys
function addFourthRow(keys) {
let parent4 = document.querySelector('.keyboard-four');
  for(let i = 34; i < 44; i++) {
  let key = document.createElement('a');
  key.innerHTML = keys[i];
  parent4.appendChild(key);
  }
}

//Add fifth row of keys
function addFifthRow(keys) {
let parent5 = document.querySelector('.keyboard-five');
let key = document.createElement('a');
key.innerHTML = keys[44];
key.classList.add('space');
parent5.appendChild(key);
}


//Add first row of keys
function addRusFirstRow(keys) {
let parent = document.querySelector('.keyboard-one');
  for(let i = 0; i < 12; i++) {
  let key = document.createElement('a');
  key.innerHTML = keys[i];
  parent.appendChild(key);
  }
}

//Add second row of keys
function addRusSecondRow(keys) {
let parent2 = document.querySelector('.keyboard-two');
  for(let i = 12; i < 25; i++) {
  let key = document.createElement('a');
  key.innerHTML = keys[i];
  parent2.appendChild(key);
  }
}

//Add third row of keys
function addRusThirdRow(keys) {
let parent3 = document.querySelector('.keyboard-three');
  for(let i = 25; i < 38; i++) {
  let key = document.createElement('a');
  key.innerHTML = keys[i];
  parent3.appendChild(key);
  }
}

//Add fourth row of keys
function addRusFourthRow(keys) {
let parent4 = document.querySelector('.keyboard-four');
  for(let i = 38; i < 44; i++) {
  let key = document.createElement('a');
  key.innerHTML = keys[i];
  parent4.appendChild(key);
  }
}

//Add fifth row of keys
function addRusFifthRow(keys) {
let parent5 = document.querySelector('.keyboard-five');
let key = document.createElement('a');
key.innerHTML = keys[51];
key.classList.add('space');
parent5.appendChild(key);
}

/*
1. Русский язык добавить.
2. Кружок к капслоку.
3. Верстку поправить.
4. Добавить кнопку которая меняет стиль клавиатуры?
*/
