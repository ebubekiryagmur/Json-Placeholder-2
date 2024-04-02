async function fetchUsers(){
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      displayUsers(users);
    } catch (error) {
      
    }
  }
  
  function displayUsers(data) {
    const container = document.getElementById("user-cards");
    data.forEach((user) => {
      const userCardHTML = `
      <div class="col-md-12 mb-4 d-flex align-items-stretch">
      <div class="card w-100">
      <div class="card-body d-flex flex-column">
      <h5 class="card-title user-name">${user.name}</h5>
      <div class="user-details">
       <p class="card-text"><i class="fa-solid fa-user"></i> @${user.username}</p>
       <p class="card-text"<i class="fa-solid fa-location-dot"></i>${user.address.street}, ${user.address.suite}, ${user.address.zipcode}</p>
       <p class="card-text"><i class="fa-solid fa-building"></i>${user.company.name}</p>
       <p class="card-text"><i class="fa-regular fa-envelope"></i>${user.email}</p>
       <p class="card-text"><i class="fa-solid fa-square-phone"></i>${user.phone}</p>
       <p class="card-text"><i class="fa-solid fa-globe"></i>${user.website}</p>
       <a href="post.html?userId=${user.id}"class="btn btn-outline-success mt-auto">Detaylar </a>
      </div>
      <div class="text-center mt-3 toggle-details">
      <i class="fa-solid fa-bars"></i>
      </div>
      </div>
      </div>
      </div>
      `;
      container.innerHTML += userCardHTML;
    });
    addToggleListeners()
  }
  
  
  
  function addToggleListeners() {
    const toggleDetails = document.querySelectorAll(".toggle-details");
    toggleDetails.forEach((item) => {
      item.addEventListener("click", function() {
        const userDetails = this.closest(".card-body").querySelector(".user-details");
        userDetails.classList.toggle("show");
        
        const icon = this.querySelector("i");
        if (icon.classList.contains("fa-bars")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    });
  }
  
  
  
  fetchUsers();
  addToggleListeners();