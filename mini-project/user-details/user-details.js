let userId = new URL(location.href).searchParams.get('userId');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
        let block = document.getElementsByClassName('wrap')[0];

        let ul = document.createElement('ul');
        recursiveBuild(user, ul)
        block.appendChild(ul);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then((response) => response.json())
            .then((posts) => {
                let postList = document.createElement('div');
                posts.forEach((post) => {
                    let postItem = document.createElement('div');
                    postItem.innerText = post.title;
                    postList.appendChild(postItem);

                    let postButton = document.createElement('button');
                    postButton.innerText = 'more details';
                    postButton.onclick = () => {
                        location.href = `mini-project/post-details.html?postId=${post.id}`;
                    }

                    postItem.appendChild(postButton);
                });

                block.appendChild(postList);
            });
    });




    function liCreator(key, value, parent){
        let li = document.createElement('li');
        li.innerText = `${key}: ${value}`
        parent.appendChild(li)

    }

function ulBuilder(key, object, parent){
    let li = document.createElement('li')
    let ul = document.createElement('ul')
    li.innerText = `${key}`
    parent.appendChild(li)
    li.appendChild(ul);
    recursiveBuild(object, ul)

    }
function recursiveBuild(object, parent){
    for (let key in object){
        typeof object [key] === 'object'
            ? ulBuilder(key, object[key], parent)
            : liCreator(key, object[key], parent)
    }


}














    //     let block = document.getElementsByClassName('wrap')[0];
    //     users.forEach((user) => {
    //         let user_block = document.createElement('div');
    //         user_block.innerText = JSON.stringify(user);
    //
    //         block.appendChild(user_block);
    //
    //         let button = document.createElement('button');
    //         button.innerText = 'post of current user';
    //         button.onclick = () => {
    //             fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    //                 .then((response) => response.json())
    //                 .then((posts) => {
    //
    //                     let postList = document.createElement('div');
    //                     posts.forEach((post) => {
    //                         let postItem = document.createElement('div');
    //                         postItem.innerText = post.title;
    //                         postList.appendChild(postItem);
    //
    //                         let postButton = document.createElement('button');
    //                         postButton.innerText = 'more details';
    //                         postButton.onclick = () => {
    //                             location.href = `mini-project/post-details.html?postId=${post.id}`;
    //                         };
    //                         postItem.appendChild(postButton);
    //                     });
    //
    //                     block.appendChild(postList);
    //                 });
    //         };
    //
    //         block.appendChild(button);
    //     });
    // });





