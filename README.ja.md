# 東京備蓄ナビ (Tokyo Stockpile Navi)

東京都が提供する公式の「東京備蓄ナビ」を基にした、各家庭の緊急時の備蓄要量を計算するためのインタラクティブなWebアプリケーションです。

## デモ

- **メインアプリケーション:** [https://code4fukui.github.io/tokyobichikunavi/](https://code4fukui.github.io/tokyobichikunavi/)
- **データビュー (備蓄ナビ):** [https://code4fukui.github.io/tokyobichikunavi/csv/](https://code4fukui.github.io/tokyobichikunavi/csv/)
- **データカード (備蓄推奨品カード):** [https://code4fukui.github.io/tokyobichikunavi/csv/card.html](https://code4fukui.github.io/tokyobichikunavi/csv/card.html)

## 機能

- **インタラクティブな計算ツール:** 家族の人数、年齢、性別に基づいて、各家庭に合わせた備蓄推奨品をステップバイステップで算出します。
- **多言語対応:** 日本語と英語の完全対応 (i18n)。
- **静的サイト生成:** Nuxt.jsによる高速な静的デプロイ。
- **テーマカスタマイズ:** アクセシビリティ向上のため、青、黄、黒のカラーテーマを用意。
- **データエクスポート:** 備蓄品データをCSV形式で提供。
- **アクセシビリティ:** フォントサイズや色のコントラストを調整する機能を搭載。

## 技術スタック

- **フレームワーク:** [Nuxt.js](https://nuxtjs.org/) (v2)
- **UI:** [Vue.js](https://vuejs.org/)
- **国際化:** [nuxt-i18n](https://i18n.nuxtjs.org/)
- **データ処理:** [Deno](https://deno.land/) (CSV生成用)
- **スタイリング:** PostCSS (CSS変数を使用)

## はじめに

### 前提条件

- Node.js (v14以降を推奨)
- npm (v6以降)
- Deno (データ処理スクリプトの実行に必要)

### インストールとローカル開発

1.  **リポジトリのクローン:**
    ```bash
    git clone https://github.com/code4fukui/tokyobichikunavi.git
    cd tokyobichikunavi
    ```

2.  **依存関係のインストール:**
    ```bash
    npm ci
    ```

3.  **開発サーバーの起動:**
    ```bash
    # http://localhost:3000 でホットリロードを有効にして起動します
    npm run dev
    ```

### 利用可能なスクリプト

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: 本番環境用にアプリケーションをビルドします。
- `npm run start`: (ビルド後に) 本番サーバーを起動します。
