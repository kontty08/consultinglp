# 生成AIコンサルティングLP

このリポジトリは、Next.js + TypeScript + Tailwind CSS + framer-motion を用いたAIコンサルティング企業向けランディングページのプロジェクトです。

## 主な機能・特徴

- モダンでリッチなUI/UXデザイン
- レスポンシブ対応のレイアウト
- スムーズなアニメーション効果（framer-motion）
- インタラクティブなパーティクルアニメーション（tsparticles）
- スクロールに応じた動的なナビゲーションバー
- 最適化されたパフォーマンス

## クイックスタート

1. **リポジトリをクローン**

```sh
git clone https://github.com/kontty08/consultinglp.git
cd consultinglp
```

2. **依存パッケージをインストール**

```sh
npm install
```

3. **開発サーバーを起動**

```sh
npm run dev
```

4. **ブラウザでアクセス**

```
http://localhost:3000
```

## 技術スタック

- **フレームワーク**: Next.js
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: 
  - framer-motion
  - @tsparticles/react
  - @tsparticles/engine
- **パッケージ管理**: npm

## 注意事項

- このリポジトリには `node_modules` ディレクトリは含まれていません。必ず `npm install` を実行してください。
- `.gitignore` により、`node_modules` や `.next` などのビルド・依存ファイルはGit管理対象外です。
- 環境変数が必要な場合は `.env` ファイルを作成してください（例: APIキーなど）。

## 推奨環境
- Node.js 18.x 以上
- npm 9.x 以上

## ディレクトリ構成

```
consultinglp/
├── src/
│   ├── components/
│   │   ├── ui/          # 共通UIコンポーネント
│   │   ├── sections/    # ページセクションコンポーネント
│   │   └── layout/      # レイアウト関連コンポーネント
│   ├── pages/          # ページコンポーネント
│   ├── styles/         # グローバルスタイル
│   └── utils/          # ユーティリティ関数
├── public/             # 静的ファイル
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── README.md
└── ...
```

## 開発ガイドライン

- コンポーネントはTypeScriptで型安全に実装
- Tailwind CSSを使用したスタイリング
- アニメーションはframer-motionを活用
- レスポンシブデザインの徹底
- パフォーマンス最適化の考慮

## ライセンス

このプロジェクトはMITライセンスです。 