
    $.fn.customPaginate = function(options){
        var paginationContainer = this;
        var itemsToPaginate;

        var defaults = {
            itemsPerPage:5
        };
        var settings = {};

        $.extend(settings, defaults, options);

        var itemsPerPage = settings.itemsPerPage;

        itemsToPaginate = $(settings.itemsToPaginate);
        var numberOfPaginationLinks = Math.ceil((itemsToPaginate.length / itemsPerPage));

        $("<ul></ul>").prependTo(paginationContainer);

        for(var i = 0; i < numberOfPaginationLinks; i++){
            paginationContainer.find("ul").append("<li>"+(i+1)+"</li>");
            if(i > 2){
                var numberLi = paginationContainer.find("ul li");/*.append("<li>"+"..."+"</li>")*/;
                /*numberLi[2].append("<li>"+"..."+"</li>");*/
                console.log(numberLi[1]);

            }
        }
        itemsToPaginate.filter(":gt(" +(itemsPerPage-1)+")").hide();
        paginationContainer.find("ul li").first().addClass(settings.activeClass).end().on('click',function(){
            $(this).addClass(settings.activeClass);
            $(this).siblings().removeClass(settings.activeClass);
            var linkNumber = $(this).text();
            var itemsToHide = itemsToPaginate.filter(":lt(" +((linkNumber-1)*itemsPerPage)+")");
            $.merge(itemsToHide, itemsToPaginate.filter(":gt(" + ((linkNumber * itemsPerPage)-1)+")"));
            itemsToHide.hide();

            var itemsToShow = itemsToPaginate.not(itemsToHide);
            itemsToShow.show();
        });

    };
