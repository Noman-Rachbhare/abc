// Sample list of courses
const courses = [
    { name: "Web Development", description: "Learn HTML, CSS, and JavaScript", price: 50 },
    { name: "Graphic Design", description: "Master Photoshop and Illustrator", price: 70 },
    { name: "Data Science", description: "Learn Python, SQL, and Machine Learning", price: 90 },
    { name: "Digital Marketing", description: "SEO, Social Media, and Content Strategy", price: 60 },
    { name: "App Development", description: "Create mobile apps for iOS and Android", price: 80 },
    { name: "Photography", description: "Master photography skills and techniques", price: 40 }
];

// Displaying the courses
const courseList = document.getElementById("course-list");
courses.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");
    courseCard.innerHTML = `
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <p><strong>$${course.price}</strong></p>
        <button onclick="addToCart('${course.name}', ${course.price})">Add to Cart</button>
    `;
    courseList.appendChild(courseCard);
});

// Cart management
let cart = [];

function addToCart(courseName, coursePrice) {
    const course = { name: courseName, price: coursePrice };
    cart.push(course);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `Total: $${total}`;
}

// Star rating in footer
const stars = document.getElementById("stars");

function createStars(rating) {
    stars.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        if (i <= rating) {
            star.innerHTML = "&#9733;"; // filled star
        } else {
            star.innerHTML = "&#9734;"; // empty star
        }
        stars.appendChild(star);
    }
}

// Default rating is 4 out of 5
createStars(4);
