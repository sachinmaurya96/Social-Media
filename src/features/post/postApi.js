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

    export function getTimeLineData(userId) {
      return new Promise(async (resolve) => {
        const response = await fetch(url+`/post/${userId}/timeline`);
        const data = await response.json();
        resolve({ data });
      });
    }

    export function likePost(likePostData) {
    
      const userId = {userId:likePostData.userId}
      return new Promise(async (resolve) => {
        const response = await fetch(url+`/post/${likePostData.dataId}/like`, {
          method:'PUT',
          body: JSON.stringify(userId),
          headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        resolve({ data });
      });
    }

    export function getPostById(userId) {
      return new Promise(async (resolve) => {
        const response = await fetch(url+`/post/`+userId);
        const data = await response.json();
        resolve({ data });
      });
    }