# forgehand-trial-probe

A deliberately tiny Node project used to prove forgehand's trial path end to end:
the `forgehand-review` GitHub App is installed here, the repository is marked as a
trial, and a pull request must be built and tested inside a sandbox image chosen
from this repository (`.nvmrc` → `node:22`), never on the host.

It is not a product and holds nothing of value. Delete it when the proof is done.

```
npm ci && npm run build && npm test
```
