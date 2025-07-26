#!/bin/bash
set -e

mkdir -p compliance-artifacts

# GitHub Settings
gh repo view --json securityPolicy,visibility,mergeCommitAllowed > compliance-artifacts/github-settings.json

# Enable Trivy for dependency scan
docker run --rm -v $(pwd):/src aquasec/trivy fs /src --format json > compliance-artifacts/trivy-deps.json

# Enable secrets scan
trufflehog filesystem --directory . --json > compliance-artifacts/secrets.json
