let posts = []

const render = function () {
    for (let post of posts) {
        $("#posts").append(`<div>${post.name}: ${post.text}</div>`);
    }
}

$('#btn').click(function () {
    let post = {};
    post.name = $("#name").val();
    post.text = $("#birthday").val();
    $("#name").empty();
    $("#birthday").empty();
    posts.push(post)

    render(posts)
})
