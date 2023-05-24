$(document).ready(function() {
    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency;
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });
    $('a[href^="#"]').click(function (){
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
}); 
});


$(function(){
    var nowDate = new Date();    
    var countDownDiff = Math.ceil((24*60*60)-(nowDate.getHours() * 60 * 60 + nowDate.getMinutes() * 60 + nowDate.getSeconds()));
    var endDate = new Date(nowDate.getTime() + countDownDiff * 1000);
    setInterval( function () {
    var diffDate = new Date(endDate.getTime() - Date.now()),
      h = (diffDate.getHours() > 9) ? diffDate.getHours() : '0'+diffDate.getHours(),
      m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0'+diffDate.getMinutes(),
      s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0'+diffDate.getSeconds();
      $('.hoursSH').html(h);
      $('.minutesSH').html(m);    
      $('.secondsSH').html(s);   
    }, 1000);
});