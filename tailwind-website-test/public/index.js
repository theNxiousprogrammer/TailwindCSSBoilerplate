const burgerIcon = document.getElementById("burger");
const mobileMenu = document.getElementById("menu");

burgerIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// JavaScript for handling menu item clicks
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove the "active" class from all menu items
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });

    // Add the "active" class to the clicked menu item
    item.classList.add("active");
  });
});