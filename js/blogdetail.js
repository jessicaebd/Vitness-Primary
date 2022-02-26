$(document).ready(function () {
	let url = new URL(window.location.href);
	let blog_id = url.searchParams.get('id');

	let blogDetailContainer = $('#blogDetailContainer');

	$.getJSON('../posts.json', function (data) {
		let blogs = data;
		let blog = data.find(({ id }) => id == blog_id);

		$('.blog-category').text(blog.category);
		$('.blog-title').text(blog.title);

		// Main panel
		$('.blog-date').text(blog.date);
		$('.blog-author').text('by ' + blog.author);
		$('.blog-image').attr('src', blog.image);
		$('.blog-description').html(blog.description);

		// Side panel
		$.each(blogs, function (i, blog) {
			if (blog.id != blog_id) {
				$('.side-panel').append(`
          <br>
          <a href="blog-detail.html?id=${blog.id}">
            <p>${blog.title}</p>
          </a><br>
          <hr>
      `);
			}
		});

		// blogDetailContainer.append(`
		//   <p class="page-title">${blog.title}</p>
		//   <p class="blog-date">Published on ${blog.date}</p>
		//   <p class="blog-author">By ${blog.author}</p>
		//   <img src="${blog.image}" class="blog-image">

		//   <br><br>
		//   <h2 class="blog-category">${blog.category}</h2>
		// <br>
		//   <p class="blog-desc">${blog.description}</p>`);
	});

	let searchParam = new URLSearchParams(location.search);
	let id = searchParam.get('id');
});
