$(function() {

  if ($('.product').hasClass('product--disabled')) {
    $('.product--disabled').find('.comment__default').addClass('comment__default--disabled');
    $('.product--disabled').find('.param').addClass('param--disabled');
    $('.product--disabled').find('.product__title').addClass('product__title--disabled');
    $('.product--disabled').find('.product__subtitle').addClass('product__subtitle--disabled');
    $('.product--disabled').find('.desc').addClass('desc--disabled');
    $('.product--disabled').find('.product__photo').addClass('product__photo--disabled');
    $('.product--disabled').find('.footer__item-default').addClass('footer__item-default--hide');
    $('.product--disabled').find('.footer__item-disabled').addClass('footer__item-disabled--show');

    $('.product__photo--disabled').on('click', function() {
      $(this).siblings('.footer').children('.footer__item-selected').removeClass('footer__item-selected--show');
      $(this).siblings('.footer').children('.footer__item-default').addClass('footer__item-default--hide');
    });

    $('.product__photo--disabled').on('mouseenter', function() {
      $(this).find('.comment__hover').removeClass('comment__hover--hover');
      $(this).find('.comment__default').removeClass('comment__default--hover');
    });
  };
});
