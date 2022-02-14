import { logout, checkAuth,  } from '../fetch-utils.js';
// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout
const logoutButton = document.getElementById('logout');

checkAuth();

logoutButton.addEventListener('click', async () => {
    logout();
});
