$("a").on( "click", function() {
  if (this.className != 'active') {
    var el = $('.active')[0]
    el.className = ''
    this.className = 'active'
  }
});
