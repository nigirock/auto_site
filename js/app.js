$(document).ready(function() {

    var preview = $(".preview");
    var button = $(".preview button");
    var h3 = $(".name_car h3");
    var filter = $(".filter");
    var butGroup = $(".btn-toolbar").children("div");





    $.ajax({
     type:"GET",
     url:"json/cars.json",
     dataType:"json",
     success:function(cars){
         var compiled = _.template($('#itemTemplates').html());
         _.each(cars.auto, function(car){
             $('.catalog').append(compiled(car))
         });
         $('.fotorama').fotorama();
         $(".paginator").customPaginate({
             itemsToPaginate: ".item_catalog",
             activeClass: "active-class"
         });
     }
     });

    $(document.body).on("change",".check",(function(){
        var input = $(this);
        var equal = input.next();
        var inEqual = equal.next();
        if(input.prop("checked")){
            equal.css("display","none");
            inEqual.addClass("in_equal").css("display","block");

        }else{
            equal.css("display","block");
            inEqual.css("display","none");
        }
    }));

    $(document.body).on("mousemove",".name_car h3",(function() {
        $(this).css("color", "#000");
            $(this).css("color", "#ee5533");
            $(this).parent()
                .next()
                .children("p:first")
                .css("color", "#ee5533");
    }));
    $(document.body).on("mouseout",".name_car h3",(function() {
        $(this).css("color","#225599");
        $(this).parent()
            .next()
            .children("p:first")
            .css("color","#000");
    }));

    $(document.body).on("click","img.preview-img",function(){
            $(".preview").fadeOut();
            $(this).siblings(".preview").toggle();
    });/*end click*/



});

