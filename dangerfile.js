// dangerfile.js
const pr = danger.github.pr;

if (!pr.body || !pr.body.includes("No secrets")) {
  warn("⚠️ Please confirm that no secrets or credentials are exposed.");
}
if (!pr.body || !pr.body.includes("README.md updated")) {
  warn("📘 If this PR adds functionality, ensure README.md is updated.");
}
