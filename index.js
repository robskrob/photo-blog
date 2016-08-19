$("a").on( "click", function() {
  if (this.className == 'unactive') {
    var el = $('.active')[0]
    el.className = 'unactive'
    this.className = 'active'
  }
});
