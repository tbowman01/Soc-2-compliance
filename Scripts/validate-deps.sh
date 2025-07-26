#!/bin/bash
set -e

echo "🔍 Validating SOC 2 audit tool dependencies..."

REQUIRED_CMDS=("gh" "trufflehog" "docker" "tfsec" "checkov" "python3" "npx")

missing=0
for cmd in "${REQUIRED_CMDS[@]}"; do
  if ! command -v "$cmd" &> /dev/null; then
    echo "❌ Missing dependency: $cmd"
    missing=1
  else
    echo "✅ Found: $cmd"
  fi
done

if [ "$missing" -ne 0 ]; then
  echo -e "\\n🚨 One or more dependencies are missing. Please install them and try again."
  exit 1
fi

echo "✅ All required tools are available."
