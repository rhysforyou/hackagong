var ROWS_ANIMATED = false

var animateRows = function() {
  if (ROWS_ANIMATED) { return }

  setTimeout(function() {
    rows = $('.resultSet .result')

    rows.each(function(index) {
      $(this).css('-webkit-transition', 'none')
      $(this).css('margin-left', '-200%')
    })

    rows.each(function(index) {
      setTimeout(function(row) {
        $(row).css('-webkit-transition', 'all 1s ease-in-out')
        $(row).css('margin-left', 0)
      }, index * 100, this)
    })
  }, 10)

  ROWS_ANIMATED = true
}