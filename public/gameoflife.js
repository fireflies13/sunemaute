function buildSlideShow(id, columns) {
  var outerScaffoldBegin = "<div class='carousel-inner'>";
  var outerScaffoldEnd = "</div></div><div class='control-box'>
      <a data-slide='prev' href='#myCarousel' class='carousel-control left' onclick='pauseCarousel('myCarousel')'>‹</a>
      <a data-slide='next' href='#myCarousel' class='carousel-control right' onclick='pauseCarousel('myCarousel')'>›</a>";
  var innerScaffoldBegin = "<div class='item'><ul class='thumbnailWrapper'>";
  var innerScaffoldEnd = "</ul></div>";
  var itemBegin = "<li class='span3'><a class='thumbnail'";
  var itemEnd = "</a></li>";

  let slidesAmount =  Math.ceil(hinweisItems.length/columns);
  let elementCounter = 0;

  var fullString = outerScaffoldBegin;

  for (var i = 0; i < slidesAmount; i++) {

    if (elementCounter == 0) {fullString = fullString.concat("<div class='item active'><ul class='thumbnailWrapper'>");}
    else {fullString = fullString.concat(innerScaffoldBegin);}

    for (var ii = 0; ii < columns; ii++) {
      // skip null-elements
      if (hinweisItems[elementCounter] == null) {continue;}
      fullString = fullString.concat(itemBegin, "href='",hinweisItems[elementCounter][0],"'>")
      fullString = fullString.concat('<h2>',hinweisItems[elementCounter][3],'</h2>')
      fullString = fullString.concat('<h3>',hinweisItems[elementCounter][1],'</h3>')
      fullString = fullString.concat('<p>',hinweisItems[elementCounter][2],'</p>')
      fullString = fullString.concat('<span>','Details','</span>')

      fullString = fullString.concat(itemEnd)
      elementCounter += 1;
    }
