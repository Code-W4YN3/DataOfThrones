document.addEventListener('DOMContentLoaded', ()=>{
  displayCharacters()
})

function displayCharacters(){
  fetch('https://thronesapi.com/api/v2/Characters')
  .then(res => res.json())
  .then(data => data.forEach(character => {
    const list =document.getElementById('castList') 
    let listItem = document.createElement('button') 
    listItem.id = "characterButton"
    listItem.innerText = `${character.fullName}`
    list.appendChild(listItem)
    let picture = document.getElementById('charImage')
    let about = document.getElementById('charData')
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

