const input = document.querySelector('input')
const addBtn = document.querySelector('button')
const ulList = document.querySelector('ul')

const addGoal = () => {
    const li = document.createElement('li')
    li.textContent = input.value
    ulList.appendChild(li)
    input.value = ''
}

addBtn.addEventListener('click', addGoal)
