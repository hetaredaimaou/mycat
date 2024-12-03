## ブランチ戦略

-   デフォルトブランチは`dev`です。
-   新機能や改善は`feat/`で始まるブランチを作成します。

## ブランチ作成からマージまで

差分を取り込む(今いるブランチを最新に最新に):

```bash
git pull origin dev
```

新しいブランチを作成:

```bash
git checkout dev
git pull origin dev
git checkout -b feat/機能名
```

開発後にコミットしてプッシュ:

```bash
git add .
git commit -m "feat: 機能の概要"
git push
```

GitHub で Pull Request を作成し、レビュー後に dev へマージ。

## コミットメッセージルール

```bash
feat: 新機能
fix: バグ修正
docs: ドキュメント変更
refactor: リファクタリング
style: コードの見た目変更
```

## 起動方法

依存パッケージをインストール:

```bash
npm install
```

開発サーバーを起動:

```bash
npm run dev
```

以下の URL にアクセス:

```bash
http://localhost:3000
```
