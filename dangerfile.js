// dangerfile.js

const pr = danger.github.pr;
const body = pr.body || "";
const title = pr.title || "";

// === 🚨 Failures ===

// 1. Must reference at least one SOC 2 control
if (!/CC\d+\.\d+/.test(body)) {
  fail("❌ PR must reference at least one SOC 2 control (e.g., `CC6.1`).");
}

// === ⚠️ Warnings ===

// 2. Confirm no secrets exposed
if (!body.includes("No secrets")) {
  warn("⚠️ Please confirm that no secrets or credentials are exposed.");
}

// 3. README.md update reminder
if (!body.includes("README.md updated")) {
  warn("📘 If this PR adds or changes user-facing functionality, ensure `README.md` is updated.");
}

// 4. Testing confirmation
if (!body.includes("Tests pass")) {
  warn("✅ Please confirm that the PR has been tested and passes.");
}

// 5. Conventional commit format suggestion
if (!/^(feat|fix|docs|refactor|chore|test)(\\(.+\\))?:\\s.+/.test(title)) {
  message("ℹ️ Consider using [Conventional Commits](https://www.conventionalcommits.org/) format for the PR title.");
}

// === 📝 Messaging ===

// 6. Friendly checklist reminder
message(`🔍 Pull Request Review Checklist:
- Reference SOC 2 criteria (e.g., CC6.1)
- Confirm no secrets are exposed
- Confirm testing and README.md updates
- Use conventional commit titles
`);

