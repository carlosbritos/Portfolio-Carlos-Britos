// PAGINA DE INICIO Y CLICK EN "LOGOS"

var listItems = {

    listAll: function(){
        for (var i = 0; i < listItems.items.length; i++ ){
            $('#section').append(listItems.assamble(listItems.items[i]))
        }
},

    assamble: function(a){
        return  '<div class="contenedores" data-id="' + a.id + '">'
        + '<a href="#"' + 'class="logoDescription" >'
        + '<img src="' + a.logoImage + '" alt="Logo">'        
        + '<div class="previewDesc">'+ a.nombreLogo + '</div>'
        + '</a>'
        + '</div>';
},
    
    listDescription: function(logo){
        for (var i = 0; i < listItems.items.length; i++ ){
            if(logo == listItems.items[i].id){
               $('#descripcion').append(listItems.assambleDescription(listItems.items[i]))
            }
        }
},

    assambleDescription: function (a){
        return '<div class="info">'
        +'<div class="imagen">'
        +'<div class="imagen-cont">'
        +'<img src="'+ a.logoImage +'" alt="">'
        +'</div>'
        +'</div>'
        +'<div class="tituloYestrellas">'
        +'<div class="text-title">' + a.nombreLogo + '</div>'              
        +'<div class="estrellas">'
        +'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'<div class="description">'
        +'<div class="textDesc">' + a.descripcionLogo +'</div class="textDesc">'
        +'</div>'
},
    


    setItems: function(b){
        listItems.items = b;
    },

    items: [],

}

listItems.setItems(elementsList);

// CLICK EN "TRABAJO NUEVO"

var listFormNewJob = {

    listForm: function(){
        $('#trabajoNuevo').append(listFormNewJob.assamble())
    },

    assamble: function(){
        return '<form class="contactoForm">'
        +'<h1 class="titulo">Subir nuevo trabajo</h1>'
        +'<label for="" class="form-label">Nombre</label>'
        +'<input type="text" class="form-input inputName" required>'
        +'<label for="" class="form-label">Descripción</label>'
        +'<input type="text" class="form-input inputDescription" required>'
        +'<label for="" class="form-file">Logo</label>'
        +'<input type="file" name="pic" class="form-submit inputLogoImage" required>'
        +'<label for="" class="form-file">Imagenes</label>'
        +'<input type="file" multiple="true" name="archivos" class="form-submit inputLogoAplicaciones" required>'
        +'<input type="submit" class="form-submit">'
        +'</form>'
    },
}

// CLICK EN "CONTACTO"

var listFormContact = {

    listForm: function(){
        $('#contacto').append(listFormContact.assamble())
    },

    assamble: function(){
        return '<form class="contactoForm">'
        +'<h1 class="titulo">Envianos un mensaje</h1>'
        +'<label for="" class="form-label">Nombre</label>'
        +'<input type="text" class="form-input" required>'
        +'<label for="" class="form-label">Apellido</label>'
        +'<input type="text" class="form-input" required>'
        +'<label for="" class="form-label">Correo</label>'
        +'<input type="text" class="form-input" required>'
        +'<label for="" class="form-label">Mensaje</label>'
        +'<input type="text" class="form-input" required>'
        +'<input type="submit" class="form-submit">'
        +'</form>'
    },

}

// CLICK EN UN LOGO

var listClickLogo = {
    
    
    //si a.id es igual a algun a.id enviar datos de  (a) a assamble y ejecutar lisAll
    
    listAll: function(){
        for (var i = 0; i < listItems.items.length; i++ ){

            $('#section').append(listItems.assamble(listItems.items[i]))
        }

    },

    assamble: function (a){
        return '<div class="info row col-12">'
        +'<div class="imagen col-3">'
        +'<div class="imagen-cont">'
        +'<img src="'+ a.logoImage +'" alt="">'
        +'</div>'
        +'</div>'
        +'<div class="col-9 row">'
        +'<div class="text-title col-12">' + a.nombreLogo + '</div>'              
        +'<div class="estrellas col-12">'
        +'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'<div class="description">'+ a.descripcionLogo +'</div>'
    }
}

/*
    al hacer clic en un logo 
    buscar los datos de ese logo con su id 
    traer los datos de ese logo 
    mostrarlos 
*/

// BOTONES

$(document).ready(function(){


    $('.logos').on('click',function(){
        
        /* $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        $('#descripcion').html("");
        listItems.listAll(); */

        location.reload();
    })
    
    $('.trabajo-nuevo').on('click',function(){
        
        $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        $('#descripcion').html("");
        listFormNewJob.listForm();
    })
    
    $('.contacto').on('click',function(){
        
        $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        $('#descripcion').html("");
        listFormContact.listForm();
    })
    
    $('.logoDescription').on('click',function(){
       
        $('#section').html("");
        var logo = $(this).parent().data('id');
        listItems.listDescription(logo);
        document.getElementById('section').style.margin = "0";

    })
})

    
    
    
$('.form-submit').on('click',function(){
        
        $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        $('#descripcion').html("");
        listItems.listAll();
        // alert('Su trabajo ha sido enviado con exito');

        var inputName = $('.inputName').val();
        var inputDescription = $('.inputDescription').val();
        var inputLogoImage = $('.inputLogoImage').val();
        var inputLogoAplicaciones = $('.inputLogoAplicaciones').val();

    $.ajax({
        method: 'POST',
        url: 'http://www.mockable.io'
    }).then(function(response){
        console.log("")
        
    })
})
