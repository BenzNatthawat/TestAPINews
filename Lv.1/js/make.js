$( document ).ready(function() {
(function() {
  var newsAPI = "http://agile-cliffs-83142.herokuapp.com/api/news";
  $.getJSON( newsAPI, {
    title: "title",
    detail: "detail",
    id: "id"
  })
    .done(function( data ) {
		$.each( data, function( i, item ) {
			console.log(item);
			// $( ".inner" ).html("Some text and markup"+i).appendTo( "#news" );
			$( "#news" ).append( "<div class='news'><div class='header border'>"+item.title+"</div><div class='body border'>"+item.detail+"</div></div>" );
				// if ( i === 3 ) {
				// return false;
			// }
		});
    });
})();
});