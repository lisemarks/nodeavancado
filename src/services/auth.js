function isAuthenticated() {

    console.log(localStorage.getItem("token"));

    return localStorage.getItem("token") !== null;
  }
  
  function getToken() {
    return localStorage.getItem("token");
  }
  
  function login(token) {
    localStorage.setItem("token", token);
  }

  function logout() {
    localStorage.removeItem("token");
  }
  
  export { isAuthenticated, getToken, login, logout };