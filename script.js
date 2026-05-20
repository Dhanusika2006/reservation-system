// script.js

document.getElementById("reservationForm").addEventListener("submit", function(e){
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const trainClass = document.getElementById("class").value;

    // Display ticket
    document.getElementById("tName").innerText = name;
    document.getElementById("tAge").innerText = age;
    document.getElementById("tGender").innerText = gender;
    document.getElementById("tFrom").innerText = from;
    document.getElementById("tTo").innerText = to;
    document.getElementById("tDate").innerText = date;
    document.getElementById("tClass").innerText = trainClass;

    document.getElementById("ticket").style.display = "block";

    alert("Ticket Booked Successfully!");
});