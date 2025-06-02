import { FormReqBody } from "../types.ts";

      const form = document.querySelector("form");
      form?.addEventListener("submit", (e) => {
        e.preventDefault();

        const body: FormReqBody = {
          title: ((e.target as HTMLFormElement).elements.namedItem("title") as HTMLInputElement).value,
          author: ((e.target as HTMLFormElement).elements.namedItem("author") as HTMLInputElement).value,
          content: ((e.target as HTMLFormElement).elements.namedItem("content") as HTMLInputElement).value,
        };

        console.log(body);

        fetch("/api/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }).then((res) => {
          if (res.redirected) {
            location.replace(res.url);
          }
        });
      });
   
