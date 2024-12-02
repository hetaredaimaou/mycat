## ブランチ戦略

- デフォルトブランチは`dev`です。
- 新機能や改善は`feat/`で始まるブランチを作成します。

## ブランチ作成からマージまで

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
git push origin feat/機能名
```
GitHubでPull Requestを作成し、レビュー後にdevへマージ。


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
以下のURLにアクセス:
```bash
http://localhost:3000
```
