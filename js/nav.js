// スマホ用ハンバーガーメニューの開閉
export function initMobileNav() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const toggle = header.querySelector(".site-header__menu-toggle");
  const nav = header.querySelector(".site-header__nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    document.body.classList.toggle("is-nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  }

  toggle.addEventListener("click", () => {
    setOpen(!header.classList.contains("is-open"));
  });

  // ナビ内リンクのタップで閉じる
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });

  // Escキーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // デスクトップ幅に戻ったら状態をリセット
  const mq = window.matchMedia("(min-width: 961px)");
  mq.addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });
}
