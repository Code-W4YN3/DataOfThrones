document.addEventListener('DOMContentLoaded', ()=>{
  displayCharacters()
  displayWelcome()
  addComment()
})
// Prompts user for a username
const User = prompt("Enter username", " ")

// Displays welcome messaage under header
function displayWelcome(){
  if(User != null){
  document.getElementById('welcome').innerText= `Welcome, @${User}`
  }
}

function displayCharacters(){
  fetch('https://thronesapi.com/api/v2/Characters')
  .then(res => res.json())
  .then(data => data.forEach(character => {

    // Creates buttons for each character
    const list =document.getElementById('castList') 
    let listItem = document.createElement('button') 
    listItem.id = "characterButton"
    listItem.innerText = `${character.fullName}`
    list.appendChild(listItem)
    let picture = document.getElementById('charImage')
    let about = document.getElementById('charData')

    // Renders character data upon character button click
    listItem.addEventListener('click', ()=>{
      picture.innerHTML= `
        <img id ="characterPicture" src="${character.imageUrl}">
      `
      about.innerHTML=`
        <p><b>First Name:</b> ${character.firstName}</p>
        <p><b>Last Name:</b> ${character.lastName}</p>
        <p><b>Title:</b> ${character.title}</p>
        <p><b>Family:</b> ${character.family}</p>
      `
    })
  }))
}

function addComment(){
  let form = document.getElementById('addCom')

  // Adds a comment after submission
  form.addEventListener('submit', function(){
    event.preventDefault()
    console.log('submitted')
    let comPar= document.createElement('p')
      comPar.className="userCom"
    let comBox = document.createElement('div')
      comBox.className="userComBox"
    let comment = document.getElementById('comment').value 
    comBox.innerHTML =`
      @<b>${User}</b>: ${comment} <br>
    `

    // Adds the comment to the comment section
    document.getElementById('comments').appendChild(comBox)
    })
  }


