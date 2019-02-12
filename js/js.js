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
        + '</a>'
        + '</div>';
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
        +'<input type="text" class="form-input" required>'
        +'<label for="" class="form-label">Descripción</label>'
        +'<input type="text" class="form-input" required>'
        +'<label for="" class="form-file">Logo</label>'
        +'<input type="file" name="pic" class="form-submit" required>'
        +'<label for="" class="form-file">Imagenes</label>'
        +'<input type="file" multiple="true" name="archivos" class="form-submit" required>'
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

    listAll: function(){
        for (var i = 0; i < listItems.items.length; i++ ){



        //    $('#section').append(listItems.assamble(listItems.items[i]))
        }

    },







}

// BOTONES

$(document).ready(function(){


    $('.logos').on('click',function(){
        
        $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        listItems.listAll();
    })
    
    $('.trabajo-nuevo').on('click',function(){
        
        $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        listFormNewJob.listForm();
    })
    
    $('.contacto').on('click',function(){
        
        $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        listFormContact.listForm();
    })
    
    $('.logoDescription').on('click',function(){
       
        $('#section').html("");
        
    })
    
    
    
}
)

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $('.form-submit').on('click',function(){
        
    $('.trabajoNuevo').html("");

    $.ajax({
        method: 'GET',
        url: 'http://www.mockable.io'
    }).then(function(response){
        console.log("")
        
    })
})
