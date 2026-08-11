# dummy-test-project

A small test repository used to verify the CodePulse automated
code-review pipeline end-to-end: GitHub webhook → webhook-listener →
RabbitMQ (`pr_queue`) → analysis-engine (ESLint/Pylint/Radon via
Reviewdog) → findings.

`src/stringUtils.js` and `src/mathUtils.py` each contain a handful of
**deliberately planted issues** for the analyzers to catch — see below.
This isn't meant to be good code; it's a fixture.

## Planted issues

**`src/stringUtils.js`** (ESLint):
- `capitalize` references `undefinedGlobal`, which is never declared → `no-undef`
- `unusedHelper` is defined but never called → `no-unused-vars`
- `total` in `countVowels` is assigned but never used after the loop → `no-unused-vars`

**`src/mathUtils.py`** (Pylint + Radon):
- `import json` at the top is never used → `unused-import`
- `average` references `total_count`, which doesn't exist → `undefined-variable`
- Missing module/function docstrings → `missing-module-docstring`, `missing-function-docstring`
- `classify_and_process` has deliberately deep nesting (multiple nested
  `if`/`for`/`while`) to push its cyclomatic complexity into Radon's
  "flagged" rank (C or worse)
