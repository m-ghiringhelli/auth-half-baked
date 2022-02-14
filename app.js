import { getUser, 
    signupUser, 
    signInUser, 
    checkAuth, 
    redirectIfLoggedIn,
    logout } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

checkAuth();
// Redirect to /other-page when page loads if user is authenticated
redirectIfLoggedIn();

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log(signUpEmail.value, signUpPassword.value);
    const resp = await signupUser(signUpEmail.value, signUpPassword.value);
    // console.log(resp);
    return resp.user;
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const resp = await signInUser(signInEmail.value, signInPassword.value);
    // Redirect to /other-page on successful auth
    redirectIfLoggedIn();
    return resp.user;
});

