const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {
        // Виводимо деталі поста
        const postDetailsContainer = document.getElementById('post-details');
        postDetailsContainer.innerText = JSON.stringify(post);


        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => response.json())
            .then((comments) => {
                // Виводимо коментарі
                const commentsContainer = document.getElementById('comments');
                comments.forEach((comment) => {
                    const commentElement = document.createElement('div');
                    commentElement.innerText = JSON.stringify(comment);
                    commentsContainer.appendChild(commentElement);
                });
            });
    });
