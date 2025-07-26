# SOC 2 Compliance GitHub Action

[![CI](https://github.com/tbowman01/Soc-2-compliance/actions/workflows/test.yml/badge.svg)](https://github.com/tbowman01/Soc-2-compliance/actions/workflows/test.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/tbowman01/Soc-2-compliance?sort=semver)](https://github.com/tbowman01/Soc-2-compliance/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

This action automates the generation of SOC 2 compliance artifacts during your CI pipeline. It integrates:

- IaC misconfiguration scanning via Checkov and tfsec
- Dependency scanning (Trivy)
- Secrets scanning (TruffleHog)
- GitHub repo metadata capture
- Policy document generation from structured controls

---

## 🚀 Usage

```yaml
jobs:
  soc2-compliance-audit:
    uses: ./.github/actions/soc2-compliance
    with:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Ensure the following files and folders exist:

```
/scripts/
  validate-dependencies.sh
  collect-artifacts.sh
  generate-policies.sh
/compliance-config/
  controls.yml
```

---

## ✅ Requirements

This action expects the following tools to be available:
- `gh`
- `docker`
- `trufflehog`
- `tfsec`
- `checkov`
- `python3`
- `npx`

---

## 📜 License

This project is licensed under the MIT License.
