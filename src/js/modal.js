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
