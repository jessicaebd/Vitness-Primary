$(document).ready(function () {
	let url = new URL(window.location.href);
	let blog_id = url.searchParams.get('id');

	let blogDetailContainer = $('#blogDetailContainer');

	$.getJSON('../posts.json', function (data) {
		let blogs = data;
		let blog = data.find(({ id }) => id == blog_id);

		blogDetailContainer.append(`
      <p class="page-title">${blog.title}</p>
      <p class="blog-date">Published on ${blog.date}</p>
      <p class="blog-author">By ${blog.author}</p>  
      <img src="https://source.unsplash.com/200x150/?study" class="blog-image">
        
      
      <p class="blog-category">${blog.category}</p>
      <p class="blog-desc">${blog.description}</p>`);
	});
});
