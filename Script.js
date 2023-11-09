let form = document.getElementById('form')
let msg = document.getElementById('msg')
let posts = document.getElementById('posts')
let input = document.getElementById('input')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('button clicked')

    formValidation()
})

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = 'Please enter a valid post'
        alert('Failed! Please enter a valid text')
    } else {
        alert('Succesful! Your To-do has been saved')
        msg.innerHTML = ""
        acceptData()
    }
    
}

let data = {}

let acceptData = () => {
    data['text'] = input.value
    console.log(data)

    createPost()
}

let createPost = () => {
    posts.innerHTML += `
    <div class="mt-3">
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit ml-5"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
    <span class="mr-7 ml-7 text-sm">Thur 2, 2023</span>
    <span class="bg-red-700 text-xs rounded-full px-2 py-0.5 text-slate-800 mt-1">pending</span>
  </div>
    `
    input.value = ""
}

//Delete Post
let deletePost = (e) => {
   e.parentElement.parentElement.remove()
}

//Edit Post
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
}


const handlePreviewTodo = (id)=>{
    console.log(id)
}