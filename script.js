// Login Function
function login() {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    // Check credentials
    if(username === "admin" && password === "1234") {
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        alert("Invalid Login");
    }
}

// Optional: Logout from index.html back to login.html
function logout() {
    window.location.href = "login.html"; // Go back to login page
}

    // NAVIGATION
    function showSection(id) {
        document.querySelectorAll(".section").forEach(s => s.style.display = "none");
        document.getElementById(id).style.display = "block";

        if (id === "medicine") loadMedicines();
        if (id === "customer") loadCustomers();
        if (id === "supplier") loadSuppliers();
        if (id === "expired") checkExpiry();
    }

   let medicines = [];

// ➕ ADD MEDICINE
function addMedicine() {
    let name = document.getElementById("medName").value;
    let batch = document.getElementById("medBatch").value;
    let expiry = document.getElementById("medExpiry").value;
    let price = document.getElementById("medPrice").value;

    let table = document.getElementById("medTable");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = batch;
    row.insertCell(2).innerText = expiry;
    row.insertCell(3).innerText = price;

    // 👉 IMPORTANT: expiry check
    checkExpiry(name, expiry);
}

// 📋 DISPLAY MEDICINES
function displayMedicines() {
    let table = document.getElementById("medTable");
    table.innerHTML = "";

    medicines.forEach((med) => {
        let row = `
            <tr>
                <td>${med.name}</td>
                <td>${med.batch}</td>
                <td>${med.expiry}</td>
                <td>${med.price}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// ⚠ CHECK EXPIRED
function checkExpiry(name, expiryDate) {
    let today = new Date();
    let exp = new Date(expiryDate);

    // Difference in days
    let diffTime = exp - today;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // 1 day before alert
    if (diffDays === 1) {
        alert("⚠ Medicine " + name + " will expire tomorrow!");
    }

    // Already expired
    if (diffDays < 0) {
        let list = document.getElementById("expiredList");
        let li = document.createElement("li");
        li.innerText = name + " (Expired)";
        list.appendChild(li);
    }
}
}

// supplier
document.getElementById("sendBtn").addEventListener("click", function () {
    let name = document.getElementById("supName").value;
    let phone = document.getElementById("supPhone").value;
    let med = document.getElementById("medName").value;
    let qty = document.getElementById("quantity").value;
    let address = document.getElementById("address").value;

    let message = `Hello ${name}, 
Medicine: ${med}
Quantity: ${qty}
Delivery Address: ${address}`;

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});

// 🧹 CLEAR DATA
function clearMedicines() {
    if (confirm("Are you sure you want to delete all medicines?")) {
        medicines = [];
        displayMedicines();
        checkExpired();
    }
}

// 🔀 SECTION SWITCH
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

// 🔓 LOGOUT (basic)
function logout() {
    alert("Logged out!");
    location.reload();
} 


document.getElementById("yr").textContent = new Date().getFullYear();

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.onclick = function(){
menu.classList.toggle("show");
}


function logout() {
    // Clear all input fields
    document.querySelectorAll('input').forEach(input => input.value = '');

    // Clear all tables and lists
    const tables = ['medTable', 'custTable', 'supTable', 'expiredList'];
    tables.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
    });

    // Hide all dashboard sections
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');

    // Redirect back to login page
    window.location.href = "login.html";
}
localStorage.clear(); // Clears all saved data