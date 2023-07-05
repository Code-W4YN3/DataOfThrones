document.addEventListener('DOMContentLoaded', ()=>{
  displayCharacters()
})

function displayCharacters(){
  fetch('https://thronesapi.com/api/v2/Characters')
  .then(res => res.json())
  .then(data => data.forEach(character => {
    const list =document.getElementById('castList') 
    let listItem = document.createElement('button') 
    listItem.innerText = `${character.fullName}`
    list.appendChild(listItem)
    listItem.addEventListener('click', ()=>{
      let picture = document.getElementById('charImage')
      let about = document.getElementById('charData')
      picture.innerHTML= `
        <img src="${character.imageUrl}">
      `
      about.innerHTML=`
        <p>First Name: ${character.firstName}</p>
        <p>Last Name: ${character.lastName}</p>
        <p>Title: ${character.title}</p>
        <p>Family: ${character.family}</p>
      `
    })
  }))
}