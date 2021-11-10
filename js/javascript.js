$(document).ready(function() {
    $(".go-to-top").hide()
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('header').addClass('sticky');
            $('#nav-mobile').addClass('sticky-mobile');
            $('#nav-mobile').removeClass('nav-mobile');
        }else{
            $('header').removeClass('sticky');
            $('#nav-mobile').removeClass('sticky-mobile');
            $('#nav-mobile').addClass('nav-mobile');
        }
        if($(this).scrollTop() > 250){
            $(".go-to-top").show("slow")
        }
        else{
            $(".go-to-top").hide("slow")
        }
    });
    $(".go-to-top").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 200)
    })
    $(".product-in-cart-mobile").addClass("product-in-cart-together")
    $(".product-in-cart").addClass("product-in-cart-together")
    $(".decor-all-left input[type=text]").addClass("content")
    $(".Search").click(function(){
        var k=$(".content").val()
        var li=$(".decor-all-left-inner h2")
        for(var i=0;i< li.length; i++)
        {
            if($(li[i]).text().indexOf(k) >=0)
            {
                $(li[i]).parent().parent().addClass("active")
            }
        }
        setTimeout(function(){
            $(".decor-all-left-inner").removeClass("active")
        }, 5000)
    })


    var subtotal=0;
    var quantity=0;
    var remove_together=0;
    $(".shop").click(function(){
        remove_together+=1;
        $(this).addClass("animate__animated animate__bounce")
        $(this).parent().addClass("temp")
        var _name=$(".temp h2").html()
        var _price=$(".temp bdi").html()
        var _img=$(".temp img").attr("src")
        subtotal+= parseInt(_price)
        quantity+=1;
        $(".product-in-cart").prepend(`
            <div class="number-products remove-together${remove_together}">
                <img src="${_img}">
                <div style=" margin-left: 20px; width: 100%; line-height: 20px; height: 65px;">
                    <div>
                        <span class="number-products-name">
                            ${_name}
                        </span>
                        <p class="number-products-price">
                            <span style="color: #ff7012;">$</span> 
                            <bdi style="color: #ff7012;">${_price}</bdi>
                        </p>
                        <input type="button" value="×" id="remove-product">
                    </div>
                </div>
            </div>
        `
        )
        document.getElementById("total").innerHTML= subtotal;
        document.getElementById("quantity").innerHTML= quantity;

        $(".product-in-cart-mobile").prepend(`
            <div class="number-products remove-together${remove_together}">
                <img src="${_img}">
                <div style=" margin-left: 20px; width: 100%; line-height: 20px; height: 65px;">
                    <div>
                        <span class="number-products-name">
                            ${_name}
                        </span>
                        <p class="number-products-price">
                            <span style="color: #ff7012;">$</span> 
                            <bdi style="color: #ff7012;">${_price}</bdi>
                        </p>
                        <input type="button" value="×" id="remove-product">
                    </div>
                </div>
            </div>
        `
        )
        document.getElementById("total-mobile").innerHTML= subtotal;
        document.getElementById("quantity-mobile").innerHTML= quantity;
        $(this).parent().removeClass("temp")
    })
    
    $(".product-in-cart-together").on("click","#remove-product", function(){
        $(this).parent().parent().parent().addClass("temp")
        var minus=$(".temp bdi").html()
        $(this).parent().parent().parent().removeClass("temp")
        $(this).parent().parent().parent().removeClass("number-products")
        $(this).parent().parent().parent().remove()
        var temp_class=$(this).parent().parent().parent().attr("class")
        $(`.remove-together${parseInt(temp_class.substr(-1,1))}`).remove()
        quantity-=1;
        subtotal-= parseInt(minus)
        document.getElementById("quantity").innerHTML= quantity;
        document.getElementById("total").innerHTML= subtotal;
        document.getElementById("quantity-mobile").innerHTML= quantity;
        document.getElementById("total-mobile").innerHTML= subtotal;
    })

    var quantity_of_products=0;
    var limit=$(".stock bdi").html()
    $(".increase-up").click(function(){
        if(quantity_of_products > parseInt(limit) -1)
        {
            return;
        }
        else
        {
            quantity_of_products+= 1;
            document.getElementById("quantity_of_products").innerHTML= quantity_of_products;
        }
    })


    $(".increase-down").click(function(){
        if(quantity_of_products <2)
        {
            return;
        }
        else
        {
            quantity_of_products-= 1;
            document.getElementById("quantity_of_products").innerHTML= quantity_of_products;
        }
    })


    $(".share-right").hide()
    $(".share").click(function(){
        
        $(".share-right").toggle(500)
    })



    $(".tab-content div:not(:first-child)").hide()
    $(".detail-of-products-middle-tab > li > a").click(function(){
        event.preventDefault()
        $(".detail-of-products-middle-tab > li > a").removeClass("active-product")
        $(this).addClass("active-product")
        var tab=$(this).attr("href")
        $(".tab-content div").hide()
        $(tab).show()
    })

    $(".detail-of-products-top-img-anothers img").click(function(){
        var change_img=$(this).attr("src")
        var _img=document.getElementById("change-img")
        var be_change=_img.src
        _img.src=change_img
        this.src=be_change
    })
    $(".nav-mobile-content-2").hide()
    $(".menu-bars").click(function(){
        $(".nav-mobile-content-2").show()
        $(".menu-bars").hide()
        $(".close-menu").show()
        $(".fa-times").css("color","#ff7012")
    })
    $(".close-menu").hide()
    $(".close-menu").click(function(){
        $(".nav-mobile-content-2").hide()
        $(".menu-bars").show()
        $(".close-menu").hide()
    })
    $(".product-in-cart-mobile").hide()
    $(".only-mobile").click(function(){
        $(".product-in-cart-mobile").toggle()
    })


    new WOW().init();
});