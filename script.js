var generatorBtn = document.getElementById('get-name');

var babyBoyRadio = document.getElementById('boy')

var babyGirlRadio = document.getElementById('girl')

var currNameContainer = document.getElementById('name-holder');

var lastNameInput = document.getElementById('last-name');

var newName = document.createElement('div');

generatorBtn.addEventListener('click', function(event){
    displayRandomName();
});

// Pulls first, middle and last name, puts them into h3, puts h3 in div and matches container to div.
function displayRandomName(){
    if(lastNameInput.value === ''){
        alert('Go ahead and put your last name in there.');
        return;
    }
    var firstName = getFirstName();
    var middleName = getMiddleName(firstName);
    var lastName = getLastName();
    var newName = document.createElement('div');
    var babyName = document.createElement('h3');
    babyName.innerText = firstName.name + ' ' + middleName.name + ' ' + lastName;
    newName.appendChild(babyName);
    var babyType = document.createElement('h4');
    if(babyBoyRadio.checked){
        babyType.innerText = 'He will be a great ' + firstName.type; 
        document.body.style.backgroundColor = 'aliceblue';
        currNameContainer.className = 'boyStyle';
    }
    else if(babyGirlRadio.checked){
        babyType.innerText = 'She will be a great ' + firstName.type; 
        document.body.style.backgroundColor = '#ffe1e6';
        currNameContainer.className = 'girlStyle'; 
    }
    newName.appendChild(babyType);
    currNameContainer.innerHTML = newName.outerHTML;
}

// Takes First Name from baby.js
function getFirstName(){
    if(babyBoyRadio.checked){
        var randomName = getRandElem(babyListBoy); 
    }
    else if(babyGirlRadio.checked){
        var randomName = getRandElem(babyListGirl); 
    }
    return randomName;
}

// Takes Middle Name from baby.js with first name filtered out.
function getMiddleName(str){ 
    if(babyBoyRadio.checked){
        var randomMiddleName = getRandElem(babyListBoy); 
    }
    else if(babyGirlRadio.checked){
        var randomMiddleName = getRandElem(babyListGirl);  
    }
    console.log(str.name);
    if(randomMiddleName.name === str.name){
        return getMiddleName(str);
    }
    console.log(randomMiddleName)
    return randomMiddleName;

    
}

// Takes Last Name from Input
function getLastName(){
    var lastNameCapitalized = transformText(lastNameInput.value);
    return lastNameCapitalized;
}

// correct capitalization of last name input
function transformText(str){
    var first = str[0].toUpperCase();
    var everythingElse = str.slice(1).toLowerCase();
    return first + everythingElse;
}

// find random element from an array
function getRandElem(arr){
    return arr[genRandNum(0,arr.length - 1)];
}

// Find random number with parameters
function genRandNum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}