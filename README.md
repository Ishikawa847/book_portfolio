# Book Portfolio
<img width="500" src="frontend/public/ogp.png">

## サービス概要
読んだ本・登録した本を管理し、自分だけの本棚として記録できるアプリです。  
また、公開プロフィール機能により、自分の本棚を他のユーザーへ共有することもできます。

---

## アプリを作った理由

私は読書を通じて知識を得ることが多く、読んだ本を記録したり、後から振り返れる環境が欲しいと感じていました。  

また、読んだ本をシェアできることにより、知識や情報の共有を促進する環境を提供できるのではと考えました。

---

## できること（機能一覧）

- ユーザー新規登録 / ログイン / ログアウト
- 認証機能（Devise Token Auth）
- Google Books API を利用した本検索機能
- 本の登録機能（検索結果から追加）
- 登録済み本一覧表示
- レスポンシブ対応UI
- ハンバーガーメニュー付きサイドバー
- 公開プロフィール機能
- 他ユーザーがログイン不要でプロフィール閲覧可能
- API連携によるSPA構成（React × Rails）

---

## 技術スタック

### 使用言語

- Ruby
- TypeScript
- HTML / CSS

### フレームワーク

- Ruby on Rails（APIモード）
- React
- Vite

### データベース

- PostgreSQL

### インフラ / ホスティング

- Render（Rails API）
- Vercel（Reactフロントエンド）

### その他ライブラリ・ツール

- Devise Token Auth
- Axios
- React Router DOM
- Tailwind CSS
- daisyUI
- Docker / Docker Compose
- Google Books API

---

## 今後の改善ポイント

- 本のカテゴリ分け / タグ機能
- お気に入り機能
- 検索履歴機能
- ページネーション対応
- OGP対応（プロフィール共有時の見栄え向上）
- テストコード拡充（RSpec / React Testing Library）
- UI/UXのさらなる改善

---

## 公開URL

- Frontend  
https://book-portfolio-wine.vercel.app

- Backend API  
（Renderにデプロイ済み）

---