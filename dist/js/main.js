//+ class active//

document.querySelectorAll('.pulsar-mode__btn').forEach(function (el) {
    el.onclick = function (e) {
        document.querySelectorAll('.pulsar-mode__btn').forEach(function (el) {
            el.classList.remove("active");
        });
        this.classList.add("active");
    }
})


// Modals //
$('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('fast');
});


$('[data-modal=order]').each(function (i) {
    $(this).on("click", function () {
        $("#order .modals__description").text($(".pulsar-order_title").eq(i).text())
        $('.overlay, #order').fadeIn('fast');
    })
})


$('[data-modal=thanks]').on('click', function () {
    $('.overlay, #thanks').fadeIn('fast');
});


$('.modals__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
});

//validate forms//


const validateForms = function (form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 20,
            },
            phone: {
                required: true,
                minlength: 3,
                maxlength: 20,
            },
            email: {
                required: true,
                email: true,
                minlength: 3,
                maxlength: 30,
            }
        }
    });
}
validateForms("#consultant form")
validateForms("#consultation form")
validateForms("#order form")


$("input[name=phone]").mask("+999-99-99-999-99");


$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        $('#consultation, #consultant, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

//Smooth scroll//
$(window).scroll(function (){
    if ($(this).scrollTop() > 1600) {
        $(".pageUp").fadeIn();
    } else {
        $(".pageUp").fadeOut()
    }
})

$("a[href^='#']").click(function (){
    const _href = $(this).attr("href");
    $("html,body").animate({scrollTop: $(_href).offset().top+"px"});
    return false
})