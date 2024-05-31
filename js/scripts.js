document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".storage__category");
  const items = document.querySelectorAll(".storage__item");

  // Function to show items of the selected category
  const showCategoryItems = (category) => {
    items.forEach((item) => {
      item.style.display =
        item.dataset.category === category ? "block" : "none";
    });
  };

  // Set initial view to show items of the first category
  showCategoryItems("Books, Bags");

  // Add click event listener to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.textContent.trim();
      showCategoryItems(category);
    });
  });
});
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
