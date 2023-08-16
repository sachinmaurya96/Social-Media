const url = "http://localhost:8080"

export function fetchLoggedInUser() {
    return new Promise(async (resolve) =>{
      const response = localStorage.getItem("profile") 
      const data = response
      resolve({data})
    }
    );
  }

  export function createUser(userData) {
    return new Promise(async (resolve) => {
      const response = await fetch(url+"/auth/signup", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }

  export function loginUser(userData) {
 
    return new Promise(async (resolve,reject) => {
      const response = await fetch(url+"/auth/login", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }

  