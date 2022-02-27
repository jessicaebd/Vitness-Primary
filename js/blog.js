$(document).ready(function () {
	let blogContainer = $('#blogContainer');
	$.getJSON('posts.json', function (data) {
		let blog = data;
		$.each(blog, function (i, blog) {
			if (i == 0) {
				$('.featured-blog').append(`
        <a href="blog-detail.html?id=${blog.id}">
          <div class="col-md-12 blog-card-featured" style="background-image: url('${blog.image}');">
          <p class="blog-title">${blog.title}</p>
          <p class="blog-category">${blog.category}</p>
          <p class="blog-date">${blog.date}</p>
          </div>
        </a>`);
			} else {
				blogContainer.append(`
        <div class="col-lg-4 col-md-6">
          <a href="blog-detail.html?id=${blog.id}">
            <div class="blog-card">
              <img src="${blog.image}" class="blog-card-image">
              <div class="blog-card-text">
                
                <p class="class-card-capsule-black">${blog.category}</p>
                <p class="blog-card-date">${blog.date}</p>
                <p class="blog-card-title">${blog.title}</p>
                <p class="blog-card-description">${blog.description}</p>
              </div>
            </div>
          </a>
        </div>`);
			}
		});
	});
});
