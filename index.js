let submitBtn = document.getElementById("submit");

const info = {
    student_name: '',
    student_id: '',
    email: '',
    contact_no: '',
}


const getData = () => {
    info.student_name = document.getElementById('name').value;
    info.student_id = document.getElementById('id').value;
    info.email = document.getElementById('email').value;
    info.contact_no = document.getElementById('contactNo').value;

    if(info.student_name == "" || info.student_id == "" || info.email == "" || info.contact_no == "") {
        alert("All fields are mandatory");
    } else if(info.student_id.length > 4) {
        alert("Student ID must not be greater than 4 digits");
    }  else if(isNaN(info.contact_no)) {
        alert("Student ID must not contain any alphabets");
    } else if(info.contact_no.length < 10 || info.contact_no.length > 10) {
        alert("Please Enter valid 10 digit Contact No.");
    }  else if(isNaN(info.contact_no)) {
        alert("Please Enter valid 10 digit Contact No.");
    } else {
        if (localStorage.getItem("infoSection") === null) {
            infoItem = [];
        }
        else {
            infoItem = JSON.parse(localStorage.getItem("infoSection"))
        }
        infoItem.push(info);
        localStorage.setItem("infoSection", JSON.stringify(infoItem));
    }
}


const showData = () => {
    let cardContainer = document.getElementById("cardContainer");

    let cards = '';

    let getLocalStorage = localStorage.getItem("infoSection");

    if (getLocalStorage === null) {
        console.log("null");
    }
    else {
        cardDivArr = JSON.parse(getLocalStorage);

        cardDivArr.forEach((item, index) => {

            cards += `<div class="card">
            <div class="info">
                <p><strong>Name</strong> : ${item.student_name}</p>
                <p><strong>ID</strong> : ${item.student_id}</p>
                <p><strong>Email</strong> : ${item.email}</p>
                <p><strong>Contact No.</strong> : ${item.contact_no}</p>
                <button onclick="deleteData(${index})">Delete</button>
            </div>
        </div>`;
        })
    }
    cardContainer.innerHTML = cards;
}


const deleteData = (index) => {
    let getList = JSON.parse(localStorage.getItem("infoSection"));
    getList.splice(index, 1);

    localStorage.setItem("infoSection", JSON.stringify(getList));
    showData();
}

window.onload = () => {
    showData();
}

submitBtn.addEventListener(('click'), () => {
    getData();
    showData();
})
