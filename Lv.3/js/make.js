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
			$( "#news" ).append( "<div class='news'><div class='header border'>"+item.title+"</div><div class='body border'>"+item.detail+"<div><a href='#' id='edit' data-id="+item.id+" class='button is-blue'>Edit</a><a href='#' id='delete' data-id="+item.id+" class='delete button is-red'>Delete</a></div></div></div>" );
		});
    });
})();
});

$(document).on('click', 'a#edit', function (e) {
  var newWindow = window.open("edit-news.html?"+$(this).data("id"), 'tbl=xxxx');
});