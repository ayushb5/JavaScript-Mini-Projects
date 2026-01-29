let Name = document.getElementById("name");
let surname = document.getElementById("surname");
let age = document.getElementById("age");
let city = document.getElementById("city");

let submit = document.getElementById("submit");

let NameErr = document.getElementById("NameErr");
let SurnameErr = document.getElementById("SurnameErr");
let AgeErr = document.getElementById("AgeErr");
let CityErr = document.getElementById("CityErr");

let arr = [];

function handleSubmit() {
  NameErr.style.display = "none";
  SurnameErr.style.display = "none";
  AgeErr.style.display = "none";
  CityErr.style.display = "none";

  let isvalid = true;
  if (Name.value.trim() === "") {
    NameErr.style.display = "block";
    isvalid = false;
  }
  if (surname.value.trim() === "") {
    SurnameErr.style.display = "block";
    isvalid = false;
  }
  if (age.value.trim() === "") {
    AgeErr.style.display = "block";
    isvalid = false;
  }
  if (city.value.trim() === "") {
    CityErr.style.display = "block";
    isvalid = false;
  }

  if (isvalid) {
    alert("Thank you, data is submitted successfully.");

    let userdata = {
      name: Name.value,
      surname: surname.value,
      age: age.value,
      city: city.value,
    };

    arr.push(userdata);
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      document.getElementById("tableBody").innerHTML = `<tr>
    <td>${arr[i].name}</td>
    <td>${arr[i].surname}</td>
    <td>${arr[i].age}</td>
    <td>${arr[i].city}</td>
    </tr>`;
    }

    Name.value = "";
    surname.value = "";
    age.value = "";
    city.value = "";
  }
}
