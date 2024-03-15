// コピーボタン要素を取得
const Gmail = document.querySelector("#gmail");

// コピーボタンクリック時の処理
Gmail.addEventListener("click", async () => {
  // コピー対象テキストを取得
  const text = Gmail.textContent;

  // Clipboard API を使用してテキストをコピー
  await navigator.clipboard.writeText(text);

  // コピー完了メッセージを表示
  alert("Gmailをコピーしました。");
});
