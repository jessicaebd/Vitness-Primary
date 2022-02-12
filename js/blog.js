$(document).ready(function () {
	let blogFeaturedContainer = $('#blogFeaturedContainer');
	let blogContainer = $('#blogContainer');
	$.getJSON('posts.json', function (data) {
		let blog = data;
		$.each(blog, function (i, blog) {
			if (i == 0) {
				blogFeaturedContainer.append(`
        <p class="blog-featured">Featured</p>
        <p class="blog-title">${blog.title}</p>
        <p class="blog-date">${blog.date}</p>`);
			} else {
				blogContainer.append(`
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a href="blog-detail.html?id=${blog.id}">
            <div class="blog-card" >
              <p class="blog-title">${blog.title}</p>
              <p class="blog-date">${blog.date}</p>
            </div>
          </a>
        </div>`);
			}
		});
	});
});
