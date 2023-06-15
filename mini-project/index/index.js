
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => res.json())
    .then((users) => {
        let block = document.getElementsByClassName('wrap')[0];
        for (let user of users) {
            let user_block = document.createElement('div');
            user_block.innerText = `${user.id} ${user.name}`
            block.appendChild(user_block)

            let button = document.createElement('button')
            button.innerText = 'more details'
            block.appendChild(button)

            button.onclick = () => {
                location.href = `mini-project/user-details/user-details.html?userId=${user.id}`
               
            }
        }

          })

