$(document).ready(function () {
	let url = new URL(window.location.href);
	let blog_id = url.searchParams.get('id');

	let blogDetailContainer = $('#blogDetailContainer');

	$.getJSON('../posts.json', function (data) {
		let blogs = data;
		let blog = data.find(({ id }) => id == blog_id);

		$('.page-title').text = blog.title;

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
