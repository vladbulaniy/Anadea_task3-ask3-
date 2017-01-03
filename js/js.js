jQuery(document).ready(function ($) {

$('.block').hide();
$('#menu ul li').hover(function(){
  $(this).children('.block').show();    
}, function(){
    $(this).children('.block').hide();
    $('.active').prev().show(); 
})

$('.active').prev().show();

$('.Pending').text('Pending').css({'background-color':'#FFE018','padding':'5px'});
$('.Bought').text('Bought').css({'background-color':'#5FC9D3','padding':'5px'});
$('.Approved').text('Approved').css({'background-color':'#ABD25E','padding':'5px'});


$('.toggleVisible').click(function(){
    var element = $(this).parent();
    element = element.parent();    
    if(element.attr('class') == 'row'){
      ShowHidenBlock(element);        
    }else{        
        element = element.parent(); 
        ShowHidenBlock(element);
        }      
    });
    
    function ShowHidenBlock(element){
        $('.hidden2').hide();        
        element.children($('.hidden2')).show();
    }
     
$('.hidden2').click(function(){   
        $('.hidden2').hide();    
        });   


var arrayComents = $('.comentsQuantity');
for( var i=0; i<arrayComents.length; i++){
  if (arrayComents[i].innerHTML != ''){
    var element;
    element = $(arrayComents[i]).parent(); 
    element = element.parent();
    element.children($('.addBlock')).show();    
    };
};    

$('.buttonHide').click(function(){
    var element;
    element = $(this).parent();   
    element.children('.otherQuestion').toggle('slow');
    console.dir($('.buttonHide').text());
    if($(this).text() == 'Hide'){
        $(this).text('Show');       
    }else{        
        $(this).text('Hide');
    }      
})

        
});//end
