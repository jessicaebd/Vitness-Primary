$(document).ready(function () {
	let url = new URL(window.location.href);
	let blog_id = url.searchParams.get('id');

	$.getJSON('../posts.json', function (data) {
		let blogs = data;
		let blog = data.find(({ id }) => id == blog_id);

		$('.blog-category').text(blog.category);
		$('.blog-title').text(blog.title);

		// Main panel
		$('.blog-date').text('Posted on ' + blog.date);
		$('.blog-author').html('By ' + '<u>' + blog.author + '</u>');
		$('.blog-image').attr('src', blog.image);
		$('.blog-content').html(blog.content);

		// Side panel
		$.each(blogs, function (i, blog) {
			if (blog.id != blog_id) {
				$('.side-panel').append(`
          <a href="blog-detail.html?id=${blog.id}">
            <p>${blog.title}</p>
          </a>
          <hr size="1">
      `);
			}
		});
	});
});
