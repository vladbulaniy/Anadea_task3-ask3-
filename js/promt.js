jQuery(document).ready(function ($) {

function hint_plagin(timeout){

var arrElWithPromt = $("[data-promt]");

$('body').append('<div id="floatingmes">  <div id="textHint">Подсказка</div> </div>');

$("#floatingmes").hide(); 
 
arrElWithPromt
.mouseover(function(){
    var text = $(this).attr('data-promt');
    $("#textHint").text(text);
    showHint($(this));
})
.mouseout(function(){
    $("#floatingmes").hide('fade'); 
});

function showHint(data){
    setTimeout(function(){
        var coords = data.offset();
        var ElWidth = parseInt(data.css('width'));
        var hintEl = $("#floatingmes");
        var objCoord = makeCoord(data); 
        $('#textHint').removeClass();
        $('#textHint').addClass(objCoord.selectedClass);
        hintEl.css('left',objCoord.left + 'px').css('top',objCoord.top+'px');
        hintEl.show();
   },timeout); 
};  

function makeCoord(data){
    var newObj={
        left:null,
        top:null,
        selectedClass:null
    }
    var coords = data.offset();
    var dataWidth = parseInt(data.css('width'));
    var dataHeight = parseInt(data.css('height'));
    var hintBlockWidth = parseInt($("#floatingmes").css('width'));
    var hintBlockHeight = parseInt($("#floatingmes").css('height'));
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    if ((dataWidth <= dataHeight) && (coords.left < windowWidth/2) ){
        newObj.selectedClass = 'left';
        newObj.left = coords.left+dataWidth+20;
        newObj.top = coords.top+5;
    } else{ 
        if ((dataWidth <= dataHeight) && (coords.left > windowWidth/2) ){
            newObj.selectedClass = 'right';
            newObj.left = coords.left-hintBlockWidth-30;
            newObj.top = coords.top-5;
            }else{
                if (coords.top < (windowHeight-150)){
                        newObj.selectedClass = 'under';
                        newObj.left = coords.left;
                        newObj.top = coords.top+hintBlockHeight;
                    } else{
                    newObj.selectedClass = 'over';
                    newObj.left = coords.left;
                    newObj.top = coords.top-dataHeight-(hintBlockHeight/2); 
                        }
                    }
                }
    
    
    return newObj;                    
    }   //makeCoord
    
} //hint_plagin   


hint_plagin(1500);
    
   

});//end

