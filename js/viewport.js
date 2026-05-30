// 390px 未満は 390px設計をそのままスケールダウンして実機幅にフィットさせる
// （以前は width=390 で固定していたが、これは横スクロールを発生させるため変更）
export function initViewportFix() {
  const viewport = document.querySelector('meta[name="viewport"]');
  const body = document.body;
  if (!viewport || !body) return;

  function switchViewport() {
    const w = window.outerWidth || window.innerWidth;
    const isXxs = w < 390;

    let newValue;
    if (isXxs) {
      const scale = (w / 390).toFixed(4);
      newValue = `width=390, initial-scale=${scale}, maximum-scale=${scale}, user-scalable=no`;
    } else {
      newValue = "width=device-width, initial-scale=1";
    }

    if (viewport.getAttribute("content") !== newValue) {
      viewport.setAttribute("content", newValue);
    }

    if (isXxs) body.classList.add("is-xxs");
    else body.classList.remove("is-xxs");
  }

  window.addEventListener("resize", switchViewport, false);
  switchViewport();
}
