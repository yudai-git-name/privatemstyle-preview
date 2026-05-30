// 390px 未満は JS で viewport を固定する
export function initViewportFix() {
  const viewport = document.querySelector('meta[name="viewport"]');
  // body要素を取得しておく
  const body = document.body;
  if (!viewport || !body) return;

  function switchViewport() {
    const isXxs = window.outerWidth < 390;

    const newValue = isXxs ? "width=390" : "width=device-width,initial-scale=1";

    if (viewport.getAttribute("content") !== newValue) {
      viewport.setAttribute("content", newValue);
    }

    // 390px以下のときだけbodyに 'is-xxs' クラスを付与する
    if (isXxs) {
      body.classList.add("is-xxs");
    } else {
      body.classList.remove("is-xxs");
    }
  }

  window.addEventListener("resize", switchViewport, false);
  switchViewport();
}
