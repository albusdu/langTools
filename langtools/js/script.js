// Header menu hovers
$('.color-control').hover(function () {
  $('.color-list').toggleClass('show')
})
$('.language-box').hover(function () {
  $('.other-languages').toggleClass('show')
})

// Burger Open/Close
$('#burger').click(function () {
  $('.header').toggleClass('header-active')
  $('main.container').toggleClass('active-mobile')
})

$('.open-inside-nav').click(function () {
  $(this).parent().toggleClass('active')
})

if ($(window).width() < 768) {
  $('.list .item').click(function () {
    $('.header').removeClass('header-active')
    $('main.container').removeClass('active-mobile')
  })
}
// Change Elements Color

$('body').addClass(localStorage.color)

$('.color-list li').click(function () {
  var colorAtr = $(this).attr('data-color')
  localStorage.color = colorAtr
  $("body[class*='color']").removeClass(function (index, css) {
    return (css.match(/(^|\s)color\S+/g) || []).join(' ')
  })

  $(document.body).addClass(colorAtr)
})

// Store Styles
if (localStorage.color == undefined) {
  localStorage.color = 'color-red'
} else {
  console.log(localStorage.color)
}

var bodyClass = document.querySelectorAll("body[class*='color-']")

$('.tabsLangContainerTtl').click(function (e) {
  e.stopPropagation()
  if (!$(this).hasClass('active')) {
    $(
      '.tabsLangContainerTtl,.tabsLangContainer,.tabsLangSelectContainer'
    ).removeClass('active')
    $(this).addClass('active')
    $(this).parent().addClass('active')
    $(this).siblings('.tabsLangSelectContainer').addClass('active')
  } else {
    $(this).removeClass('active')
    $(this).parent().removeClass('active')
    $(this).siblings('.tabsLangSelectContainer').removeClass('active')
  }
})
$('.tabsLangSelectInner a').click(function (e) {
  e.stopPropagation()
  $(this)
    .parent()
    .parent()
    .siblings('.tabsLangContainerTtl')
    .children('.tabsLangSelect')
    .val($(this).attr('data-value'))
    .change()
  $('.tabsLangSelectContainer,.tabsLangContainerTtl').removeClass('active')
  $(this)
    .parent()
    .parent()
    .siblings('.tabsLangContainerTtl ')
    .children('span')
    .text($(this).text())
})
$('.tabsLangSelectContainer .ttlContainer svg').click(function () {
  $('.tabsLangContainerTtl').removeClass('active')
  $('.tabsLangSelectContainer').removeClass('active')
})
$('.ipadTabsOpener').click(function () {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active')
    $('.tabsContainerInner').addClass('ipad')
  } else {
    $(this).removeClass('active')
    $('.tabsContainerInner').removeClass('ipad')
  }
})

$('.mobileSelectTtl').on('click', function () {
  if (!$(this).hasClass('opened')) {
    $(this).addClass('opened')
    $('.mobileTabsSelect').addClass('active')
    $('.mobileTabsSelect').css(
      'height',
      $('.mobileTabsSelectInner').height() + 15 + 'px'
    )
  } else {
    $(this).removeClass('opened')
    $('.mobileTabsSelect').removeClass('active')
    $('.mobileTabsSelect').css('height', 50 + 'px')
  }
})

// Multiple Select
$(document).ready(function () {
  // $('.js-example-basic-multiple').select2();
})

let items = document.querySelectorAll(
  '.task-sheet.admin-downloads .content .item:nth-child(3)'
)
items.forEach(function (item) {
  item.addEventListener('click', function () {
    $(this).addClass('hide-text')
  })
})

// Change color on card border
$(document).on('click', '.card-cont .box', function () {
  $(this)
    .addClass('change-color-border')
    .siblings()
    .removeClass('change-color-border')
  $('.check-but').removeClass('check-bg')
  $(this).find('.check-but').addClass('check-bg')
})

// Profile Log
$(document).on('click', '.profile-log', function () {
  $(this).toggleClass('logged')
  if ($('.profile-log').hasClass('logged')) {
    $(this).children('a').children('span').text('Log out')
    $('.profile-email').show()
  } else {
    $(this).children('a').children('span').text('Log in')
    $('.profile-email').hide()
  }
})

//Speech button
$(document).on('click', '.speech-button', function () {
  $(this).toggleClass('active')
})
setTimeout(() => {
  let mainPaddingTop = `${$('.header').height() + 15}px`
  $('main.container, nav.sidebar').css('padding-top', mainPaddingTop)
}, 100)

$(window).resize(function () {
  setTimeout(() => {
    let mainPaddingTop = `${$('.header').height() + 15}px`
    $('main.container, nav.sidebar').css('padding-top', mainPaddingTop)
  }, 100)
})
