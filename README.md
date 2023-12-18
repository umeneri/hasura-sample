# hasura-sample

# 概要
hasuraの技術検証のためのリポジトリです。

docker composeで以下コンテナを立てます。

1. hasura
1. PostgreSQL
1. Action、Event Trigger用のnodejsサーバー
1. Remote Schema用のgraphqlサーバー
1. hasura-metric-adapter
1. prometeusサーバー

# 使用方法

```
docker compose up
```
