$('.product__photo').on('mouseenter', function() {

  $(this).parents('.product').addClass('product--hover');
  $(this).find('.param').addClass('param--hover');

  if ($(this).hasClass('item-photo-selected-hover') && $(this).parents('.product-item').hasClass('disabled')) {
    $(this).find('.comment-hover').removeClass('buy-show');
    $(this).find('.comment-default').removeClass('buy-hide');
  }
});


$('.product__photo').on('mouseleave', function() {

  $(this).parents('.product').removeClass('product--hover');
  $(this).find('.param').removeClass('param--hover');
});


$('.product__photo').on('click', function() {

  $(this).parents('.product').toggleClass('product--selected');
  $(this).parents('.product').removeClass('product--selected-hover');
  $(this).find('.param').toggleClass('param--selected');
  $(this).find('.param').removeClass('param--selected-hover');
  $(this).find('.comment__hover').removeClass('comment__hover--hover');
  $(this).find('.comment__default').removeClass('comment__default--hover');
  $(this).siblings('.footer').children('.footer__item-selected').toggleClass('footer__item-selected--show');
  $(this).siblings('.footer').children('.footer__item-default').toggleClass('footer__item-default--hide');
});

$('.footer__btn').on('click', function(evt) {

  evt.preventDefault();

  $(this).parents('.product').addClass('product--selected');
  $(this).parents('.footer__item-default').parents('.footer').siblings('.product__photo').children('.param').addClass('param--selected');
  $(this).parents('.footer__item-default').addClass('footer__item-default--hide');
  $(this).parents('.footer__item-default').siblings('.footer__item-selected').addClass('footer__item-selected--show');
});
