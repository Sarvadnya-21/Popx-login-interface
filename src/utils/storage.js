// utility wrappers around localStorage used by auth context and pages
export function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}
export function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}
export function getCurrentUserEmail() {
  return localStorage.getItem('currentUser');
}
export function setCurrentUserEmail(email) {
  localStorage.setItem('currentUser', email);
}
export function clearCurrentUser() {
  localStorage.removeItem('currentUser');
}
export function findUser(email) {
  return getUsers().find(u => u.email === email);
}
