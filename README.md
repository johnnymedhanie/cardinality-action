# Cardinality GitHub Action

Public GitHub Action wrapper for Cardinality correctness testing.

## Usage

```yaml
- uses: johnnymedhanie/cardinality-action@v1
  with:
    api-key: ${{ secrets.CARDINALITY_API_KEY }}
    github-token: ${{ github.token }}
    app-url: https://cardinality.vercel.app
    engine-url: https://cardinality-engine-production.up.railway.app
    target-mode: local
    dev-command: npx vercel dev
    base-url: http://127.0.0.1:3000
    wait-for: http://127.0.0.1:3000
```
