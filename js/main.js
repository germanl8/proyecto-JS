$(document).ready(function () {


    console.log("cargado");
    
    //slider

  if(window.location.href.indexOf('index') > -1){

    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 1200,
      responsive: true,
      
    });

}  
    
  //posts

  if(window.location.href.indexOf('index') > -1){

    var posts = [

      {
        title: 'prueba de titulo 1',
        date: 'Publicado: ' + moment().format('MMMM do YYYY, h:mm:ss a'),
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta semper nunc, sed interdumsapien aliquam non. Nulla facilisi. Quisque lobortis lacus quis erat dictum commodo. Aliquamlacus eros, bibendum nec porttitor at, ultrices id ante. Vivamus aliquam fringilla feugiat.Pellentesque lobortis est ac lacus vestibulum scelerisque. Donec ac urna dolor. In hac habitasseplatea dictumst. Duis a efficitur turpis, egestas gravida arcu.'
      },

      {
        title: 'prueba de titulo 2',
        date: 'Publicado: ' + moment().format('MMMM do YYYY, h:mm:ss a'),
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta semper nunc, sed interdumsapien aliquam non. Nulla facilisi. Quisque lobortis lacus quis erat dictum commodo. Aliquamlacus eros, bibendum nec porttitor at, ultrices id ante. Vivamus aliquam fringilla feugiat.Pellentesque lobortis est ac lacus vestibulum scelerisque. Donec ac urna dolor. In hac habitasseplatea dictumst. Duis a efficitur turpis, egestas gravida arcu.'
      },

      {
        title: 'prueba de titulo 3',
        date: 'Publicado: ' + moment().format('MMMM do YYYY, h:mm:ss a'),
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta semper nunc, sed interdumsapien aliquam non. Nulla facilisi. Quisque lobortis lacus quis erat dictum commodo. Aliquamlacus eros, bibendum nec porttitor at, ultrices id ante. Vivamus aliquam fringilla feugiat.Pellentesque lobortis est ac lacus vestibulum scelerisque. Donec ac urna dolor. In hac habitasseplatea dictumst. Duis a efficitur turpis, egestas gravida arcu.'
      },

      {
        title: 'prueba de titulo 4',
        date: 'Publicado: ' + moment().format('MMMM do YYYY, h:mm:ss a'),
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta semper nunc, sed interdumsapien aliquam non. Nulla facilisi. Quisque lobortis lacus quis erat dictum commodo. Aliquamlacus eros, bibendum nec porttitor at, ultrices id ante. Vivamus aliquam fringilla feugiat.Pellentesque lobortis est ac lacus vestibulum scelerisque. Donec ac urna dolor. In hac habitasseplatea dictumst. Duis a efficitur turpis, egestas gravida arcu.'
      },


    ]

    posts.forEach((item, index) => { 
      var post = ` 
      <article class="post">
      <h2>${item.title}</h2> 
      <span class="date">${item.date}</span>
      <p>${item.content}</p>
      </article>

      `;
      
      console.log(post);

      $("#posts").append(post);
    
        
    });
  }
  // selector de theme

  var theme = $("#theme");

  $("#to-green").click(function() { 
    theme.attr("href", "css/green.css");
    
  });

  $("#to-red").click(function() { 
    theme.attr("href", "css/red.css")
    
  });

  $("#to-skyblue").click(function() { 
    theme.attr("href", "css/blue.css")
    
  });

  //scroll arriba de la web

  $('.subir').click(function (e) { 
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0

    }, 500); 

    return false;
    
  });

  //Login falso

  $("#login").submit(function () { 
    var name = $("#name").val();
    
    localStorage.setItem("name", name);
  });

    var name = localStorage.getItem("name");
    if(name != null && name != "undefined"){
      var about_p = $("#about p");

      about_p.html("<strong>Bienvenido, "+name+"</strong>");
      about_p.append("<a href='#' id='logout'> Cerrar Sesión</a>");

      $("#login").hide();
      $("#about hr").show();
      $("#logout").click(function () { 
        localStorage.clear();
        location.reload();
        
      });
    }

    //acordeon

  if(window.location.href.indexOf('about') > -1){ //comprueba si existe la palabra about en el href

      $("#acordeon").accordion();

  }

    //reloj

  if(window.location.href.indexOf('reloj') > -1){ 

    setInterval(function(){
      var reloj = moment().format("h:mm:ss");
      $("#reloj").html(reloj);

    },1000);
    
    
  }

  //validacion

  if(window.location.href.indexOf('contact') > -1){ 

    $("form input[name='date']").datepicker(); //agrego el calendario al input cuyo name es date

    $.validate({ //aplico el plugin
      lang: 'es',
      errorMessagePosition: 'top',
      scrollToTopOnError: true,
    });

  }


});