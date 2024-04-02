const queryString = window.location.search;

const newValue = queryString.split("=")[1];


async function fetchUser() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${newValue}`
  );
  const data = await response.json();
  data.forEach((user) => {
    createCards(user);
  });
}

const show = document.querySelector(".show");

function createCards(user) {
  show.innerHTML += `
  <div class="col-md-12 mb-4 d-flex align-items-stretch">
  <div class="card w-100">
  <div class="card-body d-flex flex-column">
      <h4><strong>UserID:</strong>${user.userId}</h4>
      <h5><strong>ID:</strong>${user.id}</h5>
      <p><strong>Title:</strong> ${user.title}</p>
      <p><strong>Body:</strong> ${user.body}</p>
    </div>
    </div>
    </div>

  `;
}

fetchUser();


// async function fetchUserDetails() {
//     const params = new URLSearchParams(window.location.search);
//     const userId = params.get("userId");
    
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      
//       const data = await response.json();
      
     
      
//       const userDetails = document.getElementById("userDetails")
//       userDetails.innerHTML = `
//       <div class="card col-lg-6">
//       <p>Id: ${user.userId}</p>
//       <p>Id: ${user.Id}</p>
//       <p>Title: ${user.title}</p>
//       <p>Body: ${user.body}</p>
//     </div>
     
//     `;
//     } catch (error) {
//       console.log("Hata: ", error)
//     }
//   }
  
//   fetchUserDetails();