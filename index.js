document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "Dashboard.html"
});

async function fetchdata(){
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        
        data.forEach(element => {
          let h1 = document.createElement("h1");
          h1.textContent="";
          let a = document.createElement("a");
          a.textContent=element.login;
          a.setAttribute("href",element.html_url);
          let users = document.getElementById("users");
          users.appendChild(h1);
          users.appendChild(a);
        });
    } catch (error) {
        console.log(error);
    }
}


