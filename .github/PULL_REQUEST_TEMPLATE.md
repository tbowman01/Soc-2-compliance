# ✅ SOC 2 Compliance Pull Request Checklist

## 🔍 Summary

Describe what this PR does and why it’s necessary.

---

## 📄 Documentation

- [ ] README.md updated if new features or controls were added.
- [ ] Changes to controls-matrix.yml include justification and mapping details.
- [ ] New workflows or actions include inline comments and usage instructions.

---

## 🔐 Compliance & Security

- [ ] This PR relates to:
  - **Category (e.g., Security, Availability):** `______`
  - **Criteria Code (e.g., CC6.1):** `______`
- [ ] No secrets or credentials are exposed.
- [ ] External actions use pinned versions (no `@main`).

---

## ✅ Testing

- [ ] Tested locally with `act` or equivalent.
- [ ] Added tests for new functionality (if applicable).
- [ ] Workflow or script output has been reviewed.

---

## 📎 Meta

- [ ] Linked to one or more issues (e.g., `Closes #__`)
