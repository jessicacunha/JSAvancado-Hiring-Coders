const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function(e){
    e.preventDefault()
    const listName = newListInput.value 
    if (listName === null || listName ==='') return
    const list = createList(listName)
    newListInput.value = null
    list.push(list)
    render()

})

function createList (name){
    return{id: Date.now().toString()}

}

function render() {
    clearElement(listContainer)
    list.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list
        listContainer.appendChild(item)
    })
}

function createElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}


render ()
