const div = document.createElement('div')
div.className = "main"
// div.style.width = "100%"
// div.style.backgroundSize = "cover"
document.body.appendChild(div)

let table = document.createElement('table')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')
let tr = document.createElement('tr')
let th = document.createElement('th')

const header = ["Name", "UserName", "Email", "Qualification", "Button"]

header.forEach((item) => {
    let th = document.createElement('th')
    // console.log(th)
    th.innerText = item
    tr.appendChild(th)
})

thead.appendChild(tr)
table.appendChild(thead)

div.appendChild(table)

const formDiv = document.createElement('div')
// formDiv.style.backgroundColor = "red"
formDiv.className = "formDiv"
div.appendChild(formDiv)

const form = document.createElement('form')
form.action = "#"
formDiv.appendChild(form)



const formElement = [
    {
        label: "Name :",
        for: "name",
        id: "name",
        type: "text",
        inputClass: "inputStyle"
    },
    {
        label: "User Name :",
        for: "userName",
        id: "userName",
        type: "text",
        inputClass: "inputStyle"
    },
    {
        label: "Email :",
        for: "email",
        id: "email",
        type: "email",
        inputClass: "inputStyle"
    },
    {
        type: "radio",
        label: "Qualification :",
        name: "qualification",
        options: [
            {
                id: "tenth",
                for: "tenth",
                value: "10th",
                type: "radio",
                label: "10th",
                name: "qualification",
            },
                        {
                id: "twelth",
                for: "twelth",
                value: "12th",
                type: "radio",
                label: "12th",
                name: "qualification",
            }
        ],
        
    }
]

// window.addEventListener("load", () => {
//     const arr = JSON.parse(localStorage.getItem("tableLocalArr"))
//     formElement(arr)
// })

formElement.forEach((elem) => {
    if(elem.type !== "radio"){
        let label = document.createElement('label')
        let input = document.createElement('input')
        label.innerText = elem.label
        label.setAttribute("for", elem.for)
        form.appendChild(label)

        input.className = elem.inputClass
        if(elem.id === "userName") input.setAttribute("required", "true")
        input.setAttribute("type", elem.type)
        input.setAttribute("id", elem.id)
        form.appendChild(input)
        // console.log(input)
    } else if(elem.type === "radio"){
        let label = document.createElement('label')
        label.innerText = elem.label
        label.setAttribute("for", elem.name)
        form.appendChild(label)

        let div = document.createElement('div')
        div.style.marginTop = "10px"

        elem.options?.forEach(function(radioOpt) {
            let input = document.createElement('input')
            let label = document.createElement('labe')

            input.setAttribute("type", radioOpt.type)
            input.setAttribute("id", radioOpt.id)
            input.setAttribute("value", radioOpt.value)
            input.setAttribute("name", radioOpt.name)
            input.style.backgroundColor = "red"
            div.appendChild(input)

            label.innerText = radioOpt.label
            label.setAttribute("for", radioOpt.for)
            div.appendChild(label)
        })
        form.appendChild(div)
    }
})

const submit = document.createElement('button')
submit.type = "submit"
submit.id = "submit"
submit.textContent = "submit"
form.appendChild(submit)

let addTableRow = (tableArr) => {
    let tr = document.createElement('tr')
    tableArr.forEach(function(colData) {
        let td = document.createElement('td')
        // console.log(colData)
        // console.log(tr)
        td.innerText = colData
        console.log(td)
        tr.appendChild(td)
        console.log(tr)
    })
    let td = document.createElement('td')
    let deleteBtn = document.createElement('button')
    deleteBtn.className = "deleteBtn"
    deleteBtn.innerText = "Delete"
    td.appendChild(deleteBtn)
    tr.appendChild(td)
    tbody.appendChild(tr)
    table.appendChild(tbody)
}

let tableDataArray = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("form submitted")
    let nameField = document.getElementById('name')
    let userNameField = document.getElementById('userName')
    let emailField = document.getElementById('email')
    let qualificationField = document.querySelector('input[name="qualification"]:checked')

    let name = nameField.value
    let userName = userNameField.value
    let email = emailField.value
    let qualification = qualificationField.value

    let tableDataObject = {
        nameData: name,
        userNameData: userName,
        emailData: email,
        qualificationData: qualification
    }

    tableDataArray.push(tableDataObject)
    
    localStorage.setItem("tableDataArray", JSON.stringify(tableDataArray))
    console.log(localStorage)
    console.log(tableDataArray[0])
    addTableRow(tableArr)
    
    nameField.value = ""
    userNameField.value = ""
    emailField.value = ""
    qualificationField.checked = false

    console.log(name)
    console.log(userName)
    console.log(email)
    console.log(qualification)
})


const style = document.createElement('style')
style.textContent = `
    .main {
        background-image: url('https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFja2VyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000');
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        padding-top: 30px;
        overflow: hidden
    }
    table {
        background-color: #160E0C;
        width: 70%;
        margin-left: auto;
        margin-right: 30px;
        padding: 5px;
        border-radius: 10px;
        // border: 1px solid black;
    }
    
    th, td {
        // border: 2px solid black;
        text-align: center; 
    }
    .inputStyle {
        width: 50%;
        border-radius: 5px;
        background-color: #160E0C;
        border-color: white;
        padding: 4px 10px 4px 10px;
        color: white;
        outline: none;
    }
    .inputStyle:focus {
        border-color: #fffb00ff;   /* Border ka color change */
        outline: 1px solid #eb15ebff;  /* Custom outline color */
        box-shadow: 0 0 7px #00FF99; /* Optional glow effect */
    }

    #submit {
        margin-top: 10px;
        border: 1px solid white;
        width: 50%;
        text-align: center;
        border-radius: 5px;
        padding: 4px 10px 4px 10px;
        background-color: #160E0C;
        color: white;
        font-size: 16px
    }
    #submit:hover {
        cursor: pointer;
    }
    .deleteBtn {
        border: 1px solid white;
        text-align: center;
        border-radius: 5px;
        padding: 4px 10px;
        background-color: transparent;
        color: white;
        font-size: 16px;
        border-color: white;

    }
    .deleteBtn:hover {
        cursor: pointer;
    }
    form {
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        /* background-color: blue;  */
    }

    /*
    formDiv {
        margin-top: 100px;
    }       // ye normal formDiv se apply nhi ho rhi hai kyuki ye ek selector hai js ka is par direct is tarike se css apply nhi kar sakte, css apply krne k liye ise class ya id kuch to dena padega
    */

    .formDiv {
        margin-top: 100px;
        margin-left: 20px;
        // background-color: blue;
    }
`
document.head.appendChild(style)

// console.log(div)
// console.log(form)
// console.log(table)
// console.log(tr)
// console.log(thead)
// console.log(table)
// console.log(nameInput)
