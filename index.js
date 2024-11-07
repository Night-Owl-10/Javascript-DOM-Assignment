let submitBtn = document.getElementById("submit");

const info = {
    student_name: '',
    student_id: '',
    email: '',
    class_no: '',
    roll_no: '',
    contact_no: '',
}

const getData = () => {
    info.student_name = document.getElementById('name').value;
    info.student_id = document.getElementById('id').value;
    info.email = document.getElementById('email').value;
    info.class_no = document.getElementById('classNo').value;
    info.roll_no = document.getElementById('rollNo').value;
    info.contact_no = document.getElementById('contactNo').value;


    if (localStorage.getItem("infoSection") === null) {
        infoItem = [];
    }
    else {
        infoItem = JSON.parse(localStorage.getItem("infoSection"))
    }
    infoItem.push(info);
    localStorage.setItem("infoSection", JSON.stringify(infoItem));
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
                <p><strong>Class No.</strong> : ${item.class_no}</p>
                <p><strong>Roll No.</strong> : ${item.roll_no}</p>
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
    window.location.reload();
}

submitBtn.addEventListener(('click'), () => {
    getData();
    showData();
})

