const url = "http://localhost:8080"

export function createPost(postData) {
  console.log("api",postData)
    return new Promise(async (resolve) => {
      const response = await fetch(url+"/post", {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }

  export function uploadImage(imgData) {
      return new Promise(async (resolve) => {
        const response = await fetch(url+"/upload", {
          method: 'POST',
          body: imgData,
        });
        const data = await response.json();
        resolve({ data });
      });
    }