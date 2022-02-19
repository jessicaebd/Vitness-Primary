$(document).ready(function () {
	let blogFeaturedContainer = $('#blogFeaturedContainer');
	let blogContainer = $('#blogContainer');
	$.getJSON('posts.json', function (data) {
		let blog = data;
		$.each(blog, function (i, blog) {
			if (i == 0) {
				blogFeaturedContainer.append(`
        <p class="blog-title">${blog.title}</p>
        <p class="blog-date">${blog.date}</p>`);
			} else {
				blogContainer.append(`
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a href="blog-detail.html?id=${blog.id}">
            <div class="blog-card" >
              <img src="https://source.unsplash.com/200x150/?study"     class="blog-card-image">
              <div class="blog-card-desc">
                <p class="blog-card-title">${blog.title}</p>
                <p class="blog-card-date">${blog.date}</p>
              </div>
              
            </div>
          </a>
        </div>`);
			}
		});
	});
});
