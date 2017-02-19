/*$(function() {
 
    setTimeout(function() { 
     $('.container').addClass('loaded');
    }, 500)
 
 
  	$('.bg-img').backstretch([
        'img/bg-l1.jpg',
        'img/bg-l2.jpg'
    ], {
        fade : 750, // 动画时长
        duration : 4000, // 切换延时
});
  
})
*/



$(function() {
  $('<img/>').attr('src', 'img/bg-l1.jpg').load(function() {
    $('.bg-img').append($(this));
    // simulate loading
    setTimeout(function() { 
      $('.header').slideUp('slow');
      $('.header').slideDown('fast');
      $('.footmenu').animate({top: "82%"}, 2000);
      $('.disableCss').removeAttr('href').attr({title:'登录后可进入'});
      $('.login').animate({bottom: "25%"}, 2000);
     $('.container').addClass('loaded'); 
    }, 100)
   //$(this).remove(); // prevent memory leaks as @benweet suggested
  });
  $('.footmenu').bind('click', function() {
    alert('请登录后进入！');
    $('#username').focus();
    });
  $("#Form").validate({
      debug:true,
      rules:{
        username:{
          required:true
        },
        password:{
          required:true
        }
      },
        messages:{
          username:{
            required:'必须填写用户名'
        },
          password:{
            required:'必须填写密码'
        }
        }
    });
  $('.button').bind("click",function(event){
    $('#login').removeClass('is-visible');
    $('.disableCss').attr({href:'#'}).removeAttr('title');
    //event.stopPropagation();    //  阻止事件冒泡
    return false;
  });
})
