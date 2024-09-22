
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userId = document.getElementById('userId').value;
  if (!userId) return;

  document.getElementById('userInfo').innerHTML = '';
  document.getElementById('userPosts').innerHTML = '';

  fetchUserData(userId);
});

function fetchUserData(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      displayUserInfo(user);

      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    })
    .then(response => response.json())
    .then(posts => {
      displayUserPosts(posts);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function displayUserInfo(user) {
  const userInfoDiv = document.getElementById('userInfo');

  const userInfoHTML = `
    <h2>User Information</h2>
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
  `;

  userInfoDiv.innerHTML = userInfoHTML;
}

function displayUserPosts(posts) {
  const userPostsDiv = document.getElementById('userPosts');

  let postsHTML = '<h2>User Posts</h2>';

  posts.forEach(post => {
    postsHTML += `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `;
  });

  userPostsDiv.innerHTML = postsHTML;
}
