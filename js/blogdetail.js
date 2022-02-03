let url = new URL(window.location.href);
let id = url.searchParams.get('id');
let blog = jQuery.getJSON('../posts.json');
console.log(blog);
