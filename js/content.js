initialmenu(configinterface.initialpage);

function initialmenu(pageinitial){
    var buttonsmenu = databutton; //get DATA
    var buttonsmenulength = Object.keys(buttonsmenu).length; //obtenemos el número de objetos en el fichero contando los objetos con la funcion Object.keys
    for (var i = 0; i < buttonsmenulength; i++){ //iteramos sobre el número de objetos
     var idbutton='Button'+i;//identificador del botón
     $('#lateralmenu').append(
        '<div class="buttonmenu">'+
        '<div id="'+buttonsmenu[idbutton].id+'" class="buttonmenusecond" onclick="internalMenu('+buttonsmenu[idbutton].url+','+i+');">'+                             
            '<p class="textbutton">'+buttonsmenu[idbutton].text+'</p>'+
        '</div>'+
    '</div>'
        );
    }
    $('#contentprincipal').append(
        '<div id="buttonmenuside" class="buttonnavbar animationmenunavbar">'+
        '<button class="hiddenbtnmenu" onclick="closeNav()"><</button>'+
        '</div>'
        );
    $('#contentprincipal').append(
    '<div id="lateralcontainer" class="sizerightbig animationiniright">'+
    '<div class="divmenuright">'+
    '<div id="contentRight" class="divmenusecondright">'+
    '</div>'+ 
    '</div>'+
    '</div>'
    );
    var idButtoneffect = 'p'+pageinitial;
    internalContent(pageinitial,idButtoneffect);	
}

var idButtoneffectprev;

function internalContent(idcontentinternal,idButtoneffect)
{
    var idbutton='Button'+idcontentinternal;

    $("#"+idButtoneffectprev).css({
        "filter": "drop-shadow(0px 0px 0px gray) brightness(100%)",
        
    });

    var idButtoneffect = 'p'+idcontentinternal;
    
    $("#"+idButtoneffect).css({
        "filter": "drop-shadow(8px 8px 10px white) brightness(150%)",
    });

    idButtoneffectprev = 'p'+idcontentinternal;
    var quantity = eval(databutton[idbutton].contentquantity)
    $('#contentRight').append(
        '<div id="contentRightinside" class="contentrightinside">'+
        '</div>'
    );

    for (var i = 0; i < quantity; i++){ 
    
    var Option ='Option'+i;
    var statementcontent = eval(databutton[idbutton].typecontent[Option].type);

    switch (statementcontent) {
        case 'video':
            $('#contentRightinside').append(
            '<div class="videoinsidedivcontainer">'+
            '<iframe class="videoinsidecontainer" src="'+databutton[idbutton].typecontent[Option].src+'">'+
            '</iframe>'+
            '</div>'

        );
        break;

        case 'text':
            $('#contentRightinside').append(
                '<div>'+
                '<p id="Paragraph'+Option+'" class="textinsidecontainer">'+databutton[idbutton].typecontent[Option].text+'</p>'+
                '</div>'
        );
                if (databutton[idbutton].typecontent[Option].font != 'default')
                {
                    $('#Paragraph'+Option+'').css({
                        "font-family":databutton[idbutton].typecontent[Option].font,
                    });  
                }
        break;

        case 'title':
            $('#contentRightinside').append(
                '<div>'+
                '<h1 id="Title'+Option+'" class="textinsidecontainer">'+databutton[idbutton].typecontent[Option].text+'</h1>'+
                '</div>'    
            );
                if (databutton[idbutton].typecontent[Option].font != 'default')
                {
                    $('#Title'+Option+'').css({
                        "font-family":databutton[idbutton].typecontent[Option].font,
                    });  
                }
        break;

        case 'subtitle':
            $('#contentRightinside').append(
                '<div>'+
                '<h3 id="Subtitle'+Option+'" class="textinsidecontainer">'+databutton[idbutton].typecontent[Option].text+'</h3>'+
                '</div>'
            );
                if (databutton[idbutton].typecontent[Option].font != 'default')
                {
                    $('#Subtitle'+Option+'').css({
                        "font-family":databutton[idbutton].typecontent[Option].font,
                    });  
                }
        break;

        case 'image':
            var posimage = eval(databutton[idbutton].typecontent[Option].position);
            switch (posimage) {
                case 'center':
                    $('#contentRightinside').append(
                        '<div class="imageinsidedivcontainer">'+
                        '<img class="imageinsidecontainer" style="width:'+databutton[idbutton].typecontent[Option].size+'%;" src="'+databutton[idbutton].typecontent[Option].src+'"></img>'+
                        '</div>'
                );
                break;

                case 'right':
                    $('#contentRightinside').append(
                        '<div class="imageinsidedivcontainer">'+
                        '<p class="textinsidecontainerimage">'+databutton[idbutton].typecontent[Option].text+'</p>'+
                        '<img class="imageinsidecontainerright" style="width:'+databutton[idbutton].typecontent[Option].size+'%;" src="'+databutton[idbutton].typecontent[Option].src+'"></img>'+
                        '</div>'
                );
                break;

                case 'left':
                    $('#contentRightinside').append(
                        '<div class="imageinsidedivcontainer">'+
                        '<img class="imageinsidecontainerleft" style="width:'+databutton[idbutton].typecontent[Option].size+'%;" src="'+databutton[idbutton].typecontent[Option].src+'"></img>'+
                        '<p class="textinsidecontainerimage">'+databutton[idbutton].typecontent[Option].text+'</p>'+
                        '</div>'
                );
                break;
            }

        break;

    }
    //Internal Content configuration

    $('.divmenuright').css({
        "background-color":databutton[idbutton].config.rightcontainershadow,
        "color": databutton[idbutton].config.contentcolortext,
        "font-family": databutton[idbutton].config.contentfonttext
    });
    
    $('.divmenusecondright').css("background-color", databutton[idbutton].config.rightcontainercolor);
    $('.contentrightinside').css("background-color", databutton[idbutton].config.rightbackgroundcontainercolor);
}
}

function internalMenu(choice,idcontentinternal)
{
    $( "#lateralcontainer" ).remove();
    
    if (choice == 'backtomenu'){
        initialmenu();
    }

    if (choice == 'datamenu'){
            $('#contentprincipal').append(
            '<div id="lateralcontainer" class="sizerightbig animationiniright">'+
            '<div class="divmenuright">'+
            '<div id="contentRight" class="divmenusecondright">'+
            '</div>'+ 
            '</div>'+
            '</div>'
            ); 
            internalContent(idcontentinternal);
    }
}


function openNav() {
    document.getElementById("lateralmenu").classList.remove("animationiniclose");   
    document.getElementById("lateralmenu").classList.add("animationiniopen");
    document.getElementById("lateralmenu").style.marginRight = "0%";
    document.getElementById("lateralmenu").style.left = "0%";
    $('#buttonmenuside').html(
        '<button class="hiddenbtnmenu" onclick="closeNav()"><</button>'
        );
  }
  function closeNav() {
    document.getElementById("lateralmenu").classList.remove("animationiniopen");   
    document.getElementById("lateralmenu").classList.add("animationiniclose");
    document.getElementById("lateralmenu").style.marginRight = "-30%";
    document.getElementById("lateralmenu").style.left = "-30%";
    $('#buttonmenuside').html(
        '<button class="hiddenbtnmenu" onclick="openNav()">></button>'
        );
  }


//Startconfiguration

$('.background-image').css ({
    "background-image": configinterface.backgroundimageinterface,

});

$('.buttonmenu').css({
    "background-color": configinterface.shadowbutton,
    "color": configinterface.buttoncolortext,
    "font-family": configinterface.buttonfonttext
});
$('.buttonmenusecond').css("background-color", configinterface.colorbutton);

