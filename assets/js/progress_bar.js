const progressBar = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const maxScrollable = document.documentElement.scrollHeight - window.innerHeight;
  let percent = maxScrollable > 0 ? (window.scrollY / maxScrollable) * 100 : 0;

  percent = Math.max(0, Math.min(100, percent));
  progressBar.style.width = percent + "%";
});
