import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Animation() {
  if (IS_BROWSER) {
    const pages = document.querySelectorAll(".page-content");
    pages.forEach((page) => {
      if (page.classList.contains("left")) {
        page.classList.add("from-left");
      } else if (page.classList.contains("right")) {
        page.classList.add("from-right");
      }
    })
  }

  return <></>
}
