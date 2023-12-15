//base api: https://superheroapi.com/api/access-token/character-id

const accessToken = '7630084453674307'
const api = `https://superheroapi.com/api.php/${accessToken}/`
highestIdNum = 731
const imageDiv = document.getElementById('image')
const randomBtn = document.getElementById('random-hero')




getInfo = () => {
    fetch(api+getRandomId())
    .then(response => response.json())
    .then(json => {
        imageDiv.innerHTML = `<img src = '${json.image.url}' style = "border:none; border-radius:1rem;"/>`
    })
}

const getRandomId = () =>{
    let id = Math.ceil(Math.random() * highestIdNum)
    return id
}


//function call
randomBtn.onclick = () => getInfo()
