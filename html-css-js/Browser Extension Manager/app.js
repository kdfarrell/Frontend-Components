let extensionsData = []; // Store all fetched extensions

// Theme toggle
const logo = document.getElementById('logo');
const themeBtn = document.getElementById('theme-switch');

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isDark = document.body.classList.contains("light-theme");
    themeBtn.src = isDark ? "images/icon-moon.svg" : "images/icon-sun.svg";
    logo.src = isDark ? "images/logo.svg" : "images/logo2.svg";
});

// Fetch and render extensions
document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            extensionsData = data;
            renderExtensions(data); // Initial full render
        })
        .catch(error => console.error("Error loading extensions:", error));
});

function renderExtensions(data) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    data.forEach(extension => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="details">
                <img src="${extension.logo}" alt="${extension.name}" />
                <div>
                    <h3>${extension.name}</h3>
                    <p>${extension.description}</p>
                </div>
            </div>
            <div class="controls">
                <button class="remove-btn">Remove</button>
                <label class="switch">
                    <input type="checkbox" ${extension.isActive ? "checked" : ""} />
                    <span class="slider round"></span>
                </label>
            </div>
        `;

        // Remove card on button click
        card.querySelector(".remove-btn").addEventListener("click", () => {
            card.remove();
        });

        // Update isActive in extensionsData when toggled
        const checkbox = card.querySelector("input[type='checkbox']");
        checkbox.addEventListener("change", () => {
            extension.isActive = checkbox.checked;
        });

        container.appendChild(card);
    });
}

// Filter button styling
const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Filter logic
document.getElementById("all").addEventListener("click", () => {
    renderExtensions(extensionsData);
});

document.getElementById("active").addEventListener("click", () => {
    renderExtensions(extensionsData.filter(ext => ext.isActive));
});

document.getElementById("inactive").addEventListener("click", () => {
    renderExtensions(extensionsData.filter(ext => !ext.isActive));
});
