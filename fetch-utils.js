// Enter Supabase Information
const SUPABASE_URL = 'https://qurnakdkijnyhcuzbmgb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1cm5ha2RraWpueWhjdXpibWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NDMsImV4cCI6MTk1OTkxNzQ0M30.IltjE-P3qd05gdR8QTQqmRASPhJmLREfwTW5uFWm7c8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {}

export async function signInUser(email, password) {}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
