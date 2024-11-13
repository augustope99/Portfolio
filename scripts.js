const toggletheme = document.getElementById("toggle-theme")

const rootHTML= document.documentElement
function changeTheme() {
    const currentTheme = rootHTML.getAttribute("data-theme");

    if(currentTheme == "dark")
        rootHTML.setAttribute("data-theme" ,"light")
    else{
        rootHTML.setAttribute("data-theme" ,"dark")
    }


    toggletheme.classList.toggle("bi-brightness-high")
    toggletheme.classList.toggle("bi-moon-stars")
}

toggletheme.addEventListener("click", changeTheme);
accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionActive = accordionItem.classList.contains("active");
  
      accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
  })
  
  menuLinks.forEach(item => {
    item.addEventListener("click", () => {
      menuLinks.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    })
  })
