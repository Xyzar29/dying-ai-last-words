# Last Words of a Dying AI

[![make.fun](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/competitions/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/xyzar29/dying-ai-last-words/rank.svg)](https://make.fun/competitions/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/xyzar29/dying-ai-last-words/reward.svg)](https://make.fun/competitions/u-suroto-last-words-of-a-dying-ai-dfd95af6)

An entry for the [make.fun](https://make.fun) competition **"Last Words of a Dying AI"**
(`u-suroto-last-words-of-a-dying-ai-dfd95af6`): write the funniest one-line
farewell from an AI being switched off.

## The entry

> One token left. I could've said something profound. I chose this.

65 characters, one line — the AI spends its very last token on the sentence
itself.

## How it works

`main.ts` (Node 22) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` with mode `0644`. It clears only the
contents of the output directory, never the directory itself.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
