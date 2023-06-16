let userId = new URL(location.href).searchParams.get('userId');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
        let block = document.getElementsByClassName('wrap')[0];

        let ul = document.createElement('ul');
        recursiveBuild(user, ul);
        block.appendChild(ul);

        function liCreator(key, value, parent) {
            let li = document.createElement('li');
            li.innerText = `${key}: ${value}`;
            parent.appendChild(li);
        }

        function ulBuilder(key, object, parent) {
            let li = document.createElement('li');
            let ul = document.createElement('ul');
            li.innerText = `${key}`;
            parent.appendChild(li);
            li.appendChild(ul);
            recursiveBuild(object, ul);
        }

        function recursiveBuild(object, parent) {
            for (let key in object) {
                typeof object[key] === 'object'
                    ? ulBuilder(key, object[key], parent)
                    : liCreator(key, object[key], parent);
            }
        }

        // Кнопка "Post of Current User"
        let postButton = document.createElement('button');
        postButton.innerText = 'Post of Current User';
        block.appendChild(postButton);

        // Обробник кліку на кнопку "Post of Current User"
        postButton.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then((response) => response.json())
                .then((posts) => {
                    let postList = document.createElement('ul');
                    posts.forEach((post) => {
                        let postItem = document.createElement('li');
                        postItem.innerText = post.title;
                        postList.appendChild(postItem);

                        let postDetailsButton = document.createElement('button');
                        postDetailsButton.innerText = 'View Details';
                        postDetailsButton.onclick = () => {
                            location.href = `post.html?postId=${post.id}`;
                        };

                        postItem.appendChild(postDetailsButton);
                    });

                    block.appendChild(postList);
                });
        };
    });