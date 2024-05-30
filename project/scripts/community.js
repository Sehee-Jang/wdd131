document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message');
    const communityPosts = document.getElementById('communityPosts');

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const message = messageInput.value.trim();

        if (username && message) {
            const post = {
                username,
                message,
                timestamp: new Date().toLocaleString()
            };

            savePostToLocalStorage(post);
            displayPost(post);

            usernameInput.value = '';
            messageInput.value = '';
        }
    });

    function savePostToLocalStorage(post) {
        const posts = JSON.parse(localStorage.getItem('communityPosts')) || [];
        posts.push(post);
        localStorage.setItem('communityPosts', JSON.stringify(posts));
    }

    function displayPost(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post-item');
        postElement.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.message}</p>
            <span class="timestamp">${post.timestamp}</span>
        `;
        communityPosts.appendChild(postElement);
    }

    function loadPostsFromLocalStorage() {
        const posts = JSON.parse(localStorage.getItem('communityPosts')) || [];
        posts.forEach(displayPost);
    }

    loadPostsFromLocalStorage();
});