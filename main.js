  document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de navegación para dispositivos móviles
    var mobileNavLinks = document.querySelectorAll(".nav-link");

    // Agregar un controlador de clic para cada enlace de dispositivos móviles
    mobileNavLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Remover la clase 'active' de todos los enlaces
        mobileNavLinks.forEach(function(navLink) {
          navLink.classList.remove("active");
        });

        // Agregar la clase 'active' al enlace clicado
        link.classList.add("active");
      });
    });

    // Obtener todos los enlaces de navegación para PC
    var pcNavLinks = document.querySelectorAll(".pc-link");

    // Agregar un controlador de clic para cada enlace de PC
    pcNavLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        // Remover la clase 'active' de todos los enlaces de PC
        pcNavLinks.forEach(function(pcNavLink) {
          pcNavLink.classList.remove("active");
        });

        // Agregar la clase 'active' al enlace clicado de PC
        link.classList.add("active");
      });
    });
  });












  document.addEventListener("DOMContentLoaded", function() {
    var menuaDiv = document.getElementById("menua");

    menuaDiv.addEventListener("click", function() {
      // Alternar la visibilidad del div "menua"
      if (menuaDiv.style.display === "none" || menuaDiv.style.display === "") {
        menuaDiv.style.display = "block";
      } else {
        menuaDiv.style.display = "none";
      }
    });

    // Agregar un controlador de clic para cada opción dentro de "menua"
    var menuOptions = menuaDiv.querySelectorAll("p");
    menuOptions.forEach(function(option) {
      option.addEventListener("click", function() {
        // Ocultar el div "menua" al seleccionar una opción
        menuaDiv.style.display = "none";
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("menu");
    var menuaDiv = document.getElementById("menua");

    menuButton.addEventListener("click", function() {
      // Alternar la visibilidad del div "menua"
      menuaDiv.style.display = menuaDiv.style.display === "none" || menuaDiv.style.display === "" ? "block" : "none";
    });

    // Agregar un controlador de clic para cada opción dentro de "menua"
    var menuOptions = menuaDiv.querySelectorAll("p");
    menuOptions.forEach(function(option) {
      option.addEventListener("click", function() {
        // Ocultar el div "menua" al seleccionar una opción
        menuaDiv.style.display = "none";
      });
    });
  });