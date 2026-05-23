# @niche-works/style-scroll

`@niche-works/style-scroll` は、CSSによるスクロール関連スタイルの制御に特化したニッチなライブラリです。\
オプションに応じたクラス名とCSS変数をオブジェクトとして返します。フレームワーク非依存でSSRにも対応しています。

**[English README is available here](./README.md)**

## 特徴

- フレームワーク非依存（あらゆるJS環境で動作）
- SSR対応（クラス名とインラインスタイルオブジェクトを返すだけ）
- TypeScriptによる完全な型サポート

## インストール

```bash
npm install @niche-works/style-scroll
# または
pnpm add @niche-works/style-scroll
```

## 使い方

各スタイル関数は `{ className, style }` オブジェクトを返します。対象要素に適用してください。

```ts
import { scrollbar } from '@niche-works/style-scroll';

const { className, style } = scrollbar({
  thumbSize: 6,
  thumbColor: 'rgba(0, 0, 0, 0.3)',
  thumbColorHover: 'rgba(0, 0, 0, 0.5)',
  trackColor: 'rgba(0, 0, 0, 0.05)',
});

// className: "nws-scroll-scrollbar ..."
// style: { "--nws-scroll-scrollbar-thumbSizeX": "6px", ... }
```

```html
<div
  class="nws-scroll-scrollbar ..."
  style="--nws-scroll-scrollbar-thumbSizeX: 6px; ..."
>
  <!-- スクロール可能なコンテンツ -->
</div>
```

### CSSの読み込み

デフォルトのインポートではCSSが自動的に読み込まれます。

```ts
import { scrollbar } from '@niche-works/style-scroll';
```

CSSと関数を個別に管理したい場合は `core` ディレクトリ配下のモジュールを使用してください。

```ts
import { scrollbar } from '@niche-works/style-scroll/core';

// 全スタイルをまとめてインポート
import '@niche-works/style-scroll/core/styles.scss';

// 必要なスタイルのみインポート
import '@niche-works/style-scroll/core/scrollbar.scss';
```

## スタイル種別

### `scrollbar`

スクロールバーの見た目をカスタマイズします。

WebKitブラウザー（Chrome・Edge・Safari）では `::-webkit-scrollbar` を用いたフルカスタマイズが可能です。\
非WebKitブラウザー（Firefox）では `scrollbar-width` / `scrollbar-color` によるフォールバックが適用されます。

```ts
import { scrollbar } from '@niche-works/style-scroll';

const { className, style } = scrollbar({
  thumbColor: 'rgba(231, 111, 81, 0.8)',
  thumbColorHover: 'rgba(233, 196, 106, 0.9)',
  trackColor: 'rgba(42, 157, 143, 0.2)',
  thumbSize: 9,
  thumbRadius: 8,
});
```

#### デフォルト値（WebKit）

| プロパティ         | デフォルト値                |
| ------------------ | --------------------------- |
| `thumbSize`        | `5` (通常) / `9` (ホバー)   |
| `thumbColor`       | `rgba(0, 0, 0, 0.1)`        |
| `thumbColorHover`  | `rgba(0, 0, 0, 0.3)`        |
| `trackColor`       | `rgba(128, 128, 128, 0.04)` |
| `thumbRadius`      | `'full'` (9999px)           |
| `thumbBorderWidth` | `2`                         |
| `thumbBorderColor` | `transparent`               |
| `fallbackSize`     | `'thin'`                    |

## オプション

### `scrollbar` オプション一覧

多くのオプションは縦横共通（`X`/`Y` なし）と軸別（`X`・`Y` サフィックス）の2種類があります。\
軸別が指定された場合はその値が優先され、未指定の場合は共通値が適用されます。

#### thumb サイズ

| オプション         | 型       | 説明                                            |
| ------------------ | -------- | ----------------------------------------------- |
| `thumbSize?`       | `number` | 縦横共通のハンドルの太さ (px)                   |
| `thumbSizeX?`      | `number` | 横スクロールバーのハンドルの太さ (px)           |
| `thumbSizeY?`      | `number` | 縦スクロールバーのハンドルの太さ (px)           |
| `thumbSizeHover?`  | `number` | 縦横共通のホバー時のハンドルの太さ (px)         |
| `thumbSizeXHover?` | `number` | ホバー時の横スクロールバーのハンドルの太さ (px) |
| `thumbSizeYHover?` | `number` | ホバー時の縦スクロールバーのハンドルの太さ (px) |

#### thumb カラー

| オプション            | 型       | 説明                                                            |
| --------------------- | -------- | --------------------------------------------------------------- |
| `thumbColor?`         | `string` | 縦横共通のハンドルの色                                          |
| `thumbColorX?`        | `string` | 横スクロールバーのハンドルの色                                  |
| `thumbColorY?`        | `string` | 縦スクロールバーのハンドルの色                                  |
| `thumbColorHover?`    | `string` | 縦横共通のコンテナホバー時のハンドルの色                        |
| `thumbColorXHover?`   | `string` | コンテナホバー時の横スクロールバーのハンドルの色                |
| `thumbColorYHover?`   | `string` | コンテナホバー時の縦スクロールバーのハンドルの色                |
| `thumbColorPointer?`  | `string` | 縦横共通のthumb直接ホバー時のハンドルの色 ※WebKitのみ・遷移なし |
| `thumbColorXPointer?` | `string` | 横スクロールバーのthumb直接ホバー時のハンドルの色 ※WebKitのみ   |
| `thumbColorYPointer?` | `string` | 縦スクロールバーのthumb直接ホバー時のハンドルの色 ※WebKitのみ   |

> `thumbColorPointer` はthumb上に直接ポインターがある場合のみ即時変化します。トランジションは適用されません。

#### thumb 形状

| オプション           | 型                           | 説明                                            |
| -------------------- | ---------------------------- | ----------------------------------------------- |
| `thumbRadius?`       | `number \| 'full' \| 'none'` | 縦横共通のハンドルの角丸                        |
| `thumbRadiusX?`      | `number \| 'full' \| 'none'` | 横スクロールバーのハンドルの角丸                |
| `thumbRadiusY?`      | `number \| 'full' \| 'none'` | 縦スクロールバーのハンドルの角丸                |
| `thumbBorderWidth?`  | `number`                     | 縦横共通のハンドルのボーダーの太さ (px)         |
| `thumbBorderWidthX?` | `number`                     | 横スクロールバーのハンドルのボーダーの太さ (px) |
| `thumbBorderWidthY?` | `number`                     | 縦スクロールバーのハンドルのボーダーの太さ (px) |
| `thumbBorderColor?`  | `string`                     | 縦横共通のハンドルのボーダーの色                |
| `thumbBorderColorX?` | `string`                     | 横スクロールバーのハンドルのボーダーの色        |
| `thumbBorderColorY?` | `string`                     | 縦スクロールバーのハンドルのボーダーの色        |

##### `thumbRadius` の値

| 値       | 説明                |
| -------- | ------------------- |
| `number` | 指定値 (px)         |
| `'full'` | 完全な角丸 (9999px) |
| `'none'` | 角丸なし (0px)      |

#### track

| オプション     | 型                 | 説明                           |
| -------------- | ------------------ | ------------------------------ |
| `trackColor?`  | `string`           | 縦横共通のトラックの色         |
| `trackColorX?` | `string`           | 横スクロールバーのトラックの色 |
| `trackColorY?` | `string`           | 縦スクロールバーのトラックの色 |
| `trackSize?`   | `number \| 'auto'` | 縦横共通のトラックの幅         |
| `trackSizeX?`  | `number \| 'auto'` | 横スクロールバーのトラックの幅 |
| `trackSizeY?`  | `number \| 'auto'` | 縦スクロールバーのトラックの幅 |

##### `trackSize` の値

| 値       | 説明                                                                                      |
| -------- | ----------------------------------------------------------------------------------------- |
| `number` | 指定値で固定 (px)                                                                         |
| `'auto'` | `thumbSizeActive + 2×thumbBorderWidth` に追従。ホバー時のアニメーションに同期して変化する |

> `trackSize` 未指定時はホバー後の最大サイズ（`thumbSizeHover + 2×thumbBorderWidth`）で自動算出されます。

#### その他

| オプション      | 型                           | 説明                                                                  |
| --------------- | ---------------------------- | --------------------------------------------------------------------- |
| `fallbackSize?` | `'auto' \| 'thin' \| 'none'` | 非WebKitブラウザー向けスクロールバー幅 (CSS `scrollbar-width`)        |
| `arrows?`       | `boolean`                    | 矢印ボタンの表示 (`true`: 強制表示 / `false`: 強制非表示) ※WebKitのみ |

##### `fallbackSize` の値

| 値       | 説明                           |
| -------- | ------------------------------ |
| `'auto'` | ブラウザーデフォルト           |
| `'thin'` | 細め（デフォルト）             |
| `'none'` | 非表示（スクロール操作は維持） |

## 戻り値

全てのスタイル関数は `StyleResult` を返します。

```ts
type StyleResult = {
  className?: string;
  style?: {
    [key: `--${string}`]: string | undefined;
  };
};
```

## 動作環境（対応ブラウザー）

本ライブラリはモダンCSSの標準仕様を用いて設計されており、下記のメジャーなブラウザーのバージョンに対応しています。

| ブラウザー      | 対応バージョン        | 対応バージョン(アニメーションなし) | スクロールバーカスタマイズ         |
| --------------- | --------------------- | ---------------------------------- | ---------------------------------- |
| Google Chrome   | 85 (2020年8月) 以降   | 83 (2020年5月) 以降                | フルカスタマイズ (WebKit)          |
| Microsoft Edge  | 85 (2020年8月) 以降   | 83 (2020年5月) 以降                | フルカスタマイズ (WebKit)          |
| Apple Safari    | 16.4 (2023年3月) 以降 | 14.1 (2021年4月) 以降              | フルカスタマイズ (WebKit)          |
| Mozilla Firefox | 128 (2024年7月) 以降  | 83 (2020年11月) 以降               | フォールバック (`scrollbar-width`) |

> **WebKitブラウザー（Chrome・Edge・Safari）** では `::-webkit-scrollbar` を用いたフルカスタマイズが利用できます。\
> **非WebKitブラウザー（Firefox）** では `scrollbar-width` / `scrollbar-color` のみが適用されます（色と幅のみ制御可）。

## ライセンス

MIT
