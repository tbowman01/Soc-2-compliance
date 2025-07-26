#!/bin/bash
set -e 

mkdir -p compliance-artifacts

# Convert YAML-based SOC 2 controls to Markdown
python3 -c "
import yaml
from pathlib import Path
data = yaml.safe_load(Path('compliance-config/controls.yml').read_text())
with open('compliance-artifacts/soc2-policy.md', 'w') as f:
    for control in data['controls']:
        f.write(f\"## {control['id']}: {control['title']}\n\n{control['description']}\n\n\")
"

# Convert to PDF
npx markdown-pdf compliance-artifacts/soc2-policy.md -o compliance-artifacts/soc2-policy.pdf
