name: 🛡️ Add/Update Compliance Mapping
description: Request to map controls to SOC 2 or another framework
title: "[COMPLIANCE] Map or update: <criteria or control ID>"
labels: [compliance, documentation]
assignees: []

body:
  - type: input
    id: control-id
    attributes:
      label: Control or Criteria Code
      placeholder: "CC6.1"
    validations:
      required: true

  - type: textarea
    id: justification
    attributes:
      label: Description / Implementation / Justification
      placeholder: |
        Describe how this control is implemented in the project, or where it maps.
    validations:
      required: true

  - type: input
    id: evidence
    attributes:
      label: Link to evidence or control location (optional)
      placeholder: "e.g., workflows/run-sast.yml or control-templates/cc6.1.md"
    validations:
      required: false
