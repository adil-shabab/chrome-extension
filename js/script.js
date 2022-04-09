let myTabs = []
const inputEl = document.getElementById('input-el')
const saveInputBtn = document.getElementById('inp-btn')
const saveTabBtn = document.getElementById('tab-btn')
const deleteBtn = document.getElementById('dlt-btn')
let ulEl = document.getElementById('ul-el')

let tabsFromLocalStorage = JSON.parse(localStorage.getItem("myTabs"))
if(tabsFromLocalStorage){
    myTabs = tabsFromLocalStorage
    renderTabs()
}


saveInputBtn.addEventListener("click", function(){
    myTabs.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myTabs", JSON.stringify(myTabs))
    inputEl.focus()
    renderTabs()
})

deleteBtn.addEventListener("click", function(){
    myTabs = []
    localStorage.clear()
    renderTabs()
})

saveTabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myTabs.push(tabs[0].url)
        localStorage.setItem("myTabs", JSON.stringify(myTabs) )
        renderTabs()
        console.log(tabs)
    })
})

function renderTabs(){
    listItems = ""
    for(let i=0; i < myTabs.length; i++){
        listItems += `
        <li>
            <a target='_blank' href='${myTabs[i]}'>
                ${myTabs[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}





