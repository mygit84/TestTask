$(function() {

  if ($('.product').hasClass('product--selected')) {

    $('.product--selected').find('.param').addClass('param--selected');
    $('.product--selected').find('.footer__item-selected').addClass('footer__item-selected--show');
    $('.product--selected').find('.footer__item-default').addClass('footer__item-default--hide');
  }

  $('.product__photo').on('mouseenter', function() {

    if ($(this).parents('.product').hasClass('product--selected')) {
      $(this).parents('.product').addClass('product--selected-hover');
      $(this).find('.param').addClass('param--selected-hover');
    };

    if ($(this).parents('.product').hasClass('product--selected')) {
      $(this).find('.comment__hover').addClass('comment__hover--hover');
      $(this).find('.comment__default').addClass('comment__default--hover');
    }
  });

  $('.product__photo').on('mouseleave', function() {

    $(this).parents('.product').removeClass('product--selected-hover');

    if ($(this).parents('.product').hasClass('product--selected')) {
      $(this).find('.comment__hover').removeClass('comment__hover--hover');
      $(this).find('.comment__default').removeClass('comment__default--hover');
      $(this).find('.param').removeClass('param--selected-hover');
    }
  });
});
