// Initialize Supabase Client
const { createClient } = supabase;

const supabaseUrl = 'https://hdjztkzxmapartifpwxi.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhkanp0a3p4bWFwYXJ0aWZwd3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NjE4NDgsImV4cCI6MjA0OTQzNzg0OH0.VG6inRQ4w8Ap_R1Vd4yVOQAAH1hGtAKEvpvCKOpVUE4'; // Replace with your Supabase Key, securely stored
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// Select Signup Form
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        alert(`Signup Failed: ${error.message}`);
    } else {
        alert('Signup Successful! Check your email for verification.');
        console.log(data);
    }
});

// Select Login Form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert(`Login Failed: ${error.message}`);
    } else {
        alert('Login Successful!');
        console.log(data);
    }
});




















// // Include Supabase Client Library
// const { createClient } = window.supabase;

// // Initialize Supabase
// const supabaseUrl = 'https://hdjztkzxmapartifpwxi.supabase.co'; // Replace with your Supabase URL
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhkanp0a3p4bWFwYXJ0aWZwd3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NjE4NDgsImV4cCI6MjA0OTQzNzg0OH0.VG6inRQ4w8Ap_R1Vd4yVOQAAH1hGtAKEvpvCKOpVUE4'; // Replace with your Supabase Key, securely stored
// const supabase = createClient(supabaseUrl, supabaseKey);

// // Get references to HTML elements
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const signUpButton = document.getElementById('signup-button');
// const logInButton = document.getElementById('login-button');
// // const logOutButton = document.getElementById('logOut');
// const message = document.getElementById('message');

// // Sign Up Function
// signUpButton.addEventListener('click', async () => {
//   const email = emailInput.value.trim();
//   const password = passwordInput.value.trim();

//   if (!email || !password) {
//     message.textContent = 'Please provide an email and password.';
//     return;
//   }

//   try {
//     const { error } = await supabase.auth.signUp({ email, password });

//     if (error) {
//       message.textContent = `Sign up failed: ${error.message}`;
//     } else {
//       message.textContent = 'Sign up successful! Please check your email for confirmation.';
//     }
//   } catch (err) {
//     message.textContent = `Unexpected error: ${err.message}`;
//   }
// });

// // Log In Function
// logInButton.addEventListener('click', async () => {
//   const email = emailInput.value.trim();
//   const password = passwordInput.value.trim();

//   if (!email || !password) {
//     message.textContent = 'Please provide an email and password.';
//     return;
//   }

//   try {
//     const { error } = await supabase.auth.signInWithPassword({ email, password });

//     if (error) {
//       message.textContent = `Log in failed: ${error.message}`;
//     } else {
//       message.textContent = 'Log in successful!';
//     }
//   } catch (err) {
//     message.textContent = `Unexpected error: ${err.message}`;
//   }
// });

// Log Out Function
// logOutButton.addEventListener('click', async () => {
//   try {
//     const { error } = await supabase.auth.signOut();

//     if (error) {
//       message.textContent = `Log out failed: ${error.message}`;
//     } else {
//       message.textContent = 'Logged out successfully!';
//     }
//   } catch (err) {
//     message.textContent = `Unexpected error: ${err.message}`;
//   }
// });
