document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var content = document.getElementById("contentInput").value;
  
    var commentList = document.getElementById("commentList");
    var commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = "<p class='author'>Comment Author: User</p>" +
      "<p class='content'>" + content + "</p>";
  
    commentList.appendChild(commentElement);
  
    // Reset form field
    document.getElementById("contentInput").value = "";
  });