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
  }))
}