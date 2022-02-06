# uec-kanmeiban-generator
## What is this?
UECの施設にある、建物名が書かれたパネル(舘名板, kanmeiban)っぽい画像を生成するやつ

## Usage
Webブラウザ上で利用する(https://ueckanmeiban.matchaism.net/)

  - PC推奨
  - ブラウザ上でJavaScriptが動くように設定
  - Chrome, Firefoxで動作確認済み

1. 建物名(building)を指定
2. フォントサイズ(font size)を指定
3. 建物名の位置を調整(margin-topが縦方向、leftが横方向)
4. `Generate!!`ボタンを押して、舘名板を生成(プレビュー)
5. 完成したら、`Convert to image`ボタンで画像を生成して保存(画像を左クリック→名前をつけて保存) or スクリーンショットして保存

## Dependency
  - [jQuery](https://jquery.com/)
    - version 3.6.0
    - [CDN](https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js)
  - [html2canvas](https://html2canvas.hertzen.com/)
    - version 1.4.1
    - [CDN](https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js)
