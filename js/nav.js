$(document).on("scroll", function(){
    if($(document).scrollTop() > 86)
    {
      $("#navbar").addClass("sticky");
      $("#nav-logo").addClass("color-white");
      $(".nav-custom-link").addClass("color-white");
      $(".navbar-btn").addClass("nav-btn-icon");
    }
    else
    {
        $("#navbar").removeClass("sticky");
        $("#nav-logo").removeClass("color-white");
        $(".nav-custom-link").removeClass("color-white");
        $(".navbar-btn").removeClass("nav-btn-icon");
    }
    var scrollToTopLink = document.getElementById("scrollToTopLink");
    scrollToTopLink.addEventListener("click", function(event) {
        // Отменяем стандартное действие перехода по ссылке
        event.preventDefault();
    
        // Прокручиваем страницу наверх
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Добавляем плавную анимацию прокрутки
        });
      
        // Можно также изменить адресную строку на URL ссылки, если это необходимо
        // window.history.pushState({}, "", "index.html");
});
});