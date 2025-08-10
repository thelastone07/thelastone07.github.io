const progressBar = document.getElementById("scrollProgress");
const content = document.getElementById("content-body");

console.log("hello world")

window.addEventListener("scroll", () => {
  const totalHeight = content.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrolled = window.scrollY;

  const maxScrollable = windowHeight - (2 * totalHeight);
  let percent = (scrolled / maxScrollable) * 100;


  percent = Math.max(0, Math.min(100, percent));
console.log(percent);
  progressBar.style.width = percent + "%";
});
