//localStorage.clear();

function getComments() {
  let comments = localStorage.getItem("comments");

  return comments ? JSON.parse(comments) : [];
}
function saveComment(comments) {
  localStorage.setItem("comments", JSON.stringify(comments));
}
function displayComments() {
  const comments = getComments();
  const commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML = "";

  comments.forEach((comment) => {
    const p = document.createElement("p");
    p.textContent = comment.text;
    commentsDiv.appendChild(p);
  });
}
function clearLocal() {
  localStorage.clear();
  displayComments();
}

const form = document.getElementById("new-comment");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const commentText = document.getElementById("comment-text").value;
  let comments = getComments();

  comments.push({ text: commentText });
  saveComment(comments);
  document.getElementById("comment-text").value = "";

  displayComments();
  console.log(localStorage);
});
form.addEventListener("reset", (e) => {
  clearLocal();
});
