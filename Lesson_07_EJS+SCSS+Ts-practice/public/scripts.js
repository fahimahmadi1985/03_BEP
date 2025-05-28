// src/scripts.ts
var form = document.querySelector("form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const body = {
    title: e.target.elements.namedItem("title").value,
    author: e.target.elements.namedItem("author").value,
    content: e.target.elements.namedItem("content").value
  };
  console.log(body);
  fetch("/api/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then((res) => {
    if (res.redirected) {
      location.replace(res.url);
    }
  });
});
