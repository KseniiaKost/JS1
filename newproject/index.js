
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        let block = document.getElementsByClassName('wrap')[0];
        users.forEach((user) => {
            let user_block = document.createElement('div');
            user_block.innerText = JSON.stringify(user);
            block.appendChild(user_block);

            let button = document.createElement('button');
            button.innerText = 'more details';
            button.onclick = () => {
                location.href = `../newproject/user.html?userId=${user.id}`;
            };
            block.appendChild(button);
        });
    });