// head bar icon
let iconBar = document.querySelector(".fa-bars");
let sideBar = document.querySelector(".sidebar");
iconBar.onclick = () => {
  sideBar.classList.toggle("show");
};

// toggle switch
let toggle = document.querySelectorAll(".toggle-switch");

toggle.forEach((toggles) => {
  toggles.addEventListener("click", (e) => {
    e.target.classList.toggle("clicked");
    if (e.target.classList.contains("clicked")) {
      localStorage.setItem("toggle-switch", "clicked");
    } else localStorage.removeItem("toggle-switch");
  });
});

window.onload = () => {
  const isClicked = localStorage.getItem("toggle-switch");
  if (isClicked) {
    toggle.forEach((toggles) => {
      toggles.classList.add("clicked");
    });
  }
};

// servers
let servers = document.querySelectorAll(".server");

servers.forEach((server) => {
  server.addEventListener("click", (e) => {
    servers.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// click anywhere outside menu to close sidebar

document.addEventListener("click", (e) => {
  if (e.target !== sideBar && e.target !== iconBar) {
    if (sideBar.classList.contains("show")) {
      sideBar.classList.toggle("show");
    }
  } else {
    iconBar.onclick = () => {
      sideBar.classList.toggle("show");
    };
  }
});
