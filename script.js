async function signup() {
  const name = document.getElementById('signup-name').value.trim();
  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const errorMsg = document.getElementById('signup-error');

  if (!name || !username || !password) {
    alert("Please fill in all fields.");
    errorMsg.textContent = "";
    return;
  }

  const nameRegex = /^[A-Za-z\s]+$/;
  const userRegex = /^(?=.*[A-Z])[A-Za-z0-9]{2,19}$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!nameRegex.test(name)) {
    alert("Name must contain only letters and spaces.");
    errorMsg.textContent = "";
    return;
  }

  if (!userRegex.test(username)) {
    alert("Username must contain at least one capital letter and be 2-19 characters.");
    errorMsg.textContent = "";
    return;
  }

  if (!passRegex.test(password)) {
    alert("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
    errorMsg.textContent = "";
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, password })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Signup failed.");
      errorMsg.textContent = data.message || "Signup failed.";
    } else {
      alert(data.message);
      window.location.href = 'login.html';
    }
  } catch (err) {
    alert("Network error.");
    errorMsg.textContent = "Network error.";
  }
}



async function login() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const errorMsg = document.getElementById('login-error');

  if (!username || !password) {
    alert("Please enter both username and password.");
    errorMsg.textContent = "";
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed.");
      errorMsg.textContent = data.message || "Login failed.";
    } else {
      alert("Login successful!");
      window.location.href = 'Mood&MealSelection.html'; // Or your next page
    }
  } catch (err) {
    alert("Network error.");
    errorMsg.textContent = "Network error.";
  }
}


async function sendContactForm(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }
   const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Name must contain only letters and spaces.");
    errorMsg.textContent = "";
    return;
  }
  try {
    const response = await fetch('http://localhost:3000/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, subject, message })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Message not sent.");
    } else {
      alert(data.message || "Message sent successfully!");
      document.querySelector(".contact-form").reset();
    }
  } catch (err) {
    alert("Network error.");
    
  }
}
