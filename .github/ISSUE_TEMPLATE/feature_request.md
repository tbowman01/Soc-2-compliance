name: Feature Request
description: Suggest a new feature for Soc-2-compliance
title: "[FEATURE] "
labels: ["enhancement"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to request a feature! Please fill out the sections below.

  - type: textarea
    id: description
    attributes:
      label: Feature Description
      description: A clear and concise description of the feature you'd like to see
      placeholder: Describe the feature...
    validations:
      required: true

  - type: textarea
    id: use-case
    attributes:
      label: Use Case
      description: Describe the problem this feature would solve
      placeholder: What problem does this solve?
    validations:
      required: true

  - type: dropdown
    id: phase
    attributes:
      label: Implementation Phase
      description: Which phase should this feature be implemented in?
      options:
        - Phase 1 - 
        - Phase 2 - 
        - Phase 3 - 
        - Phase 4 - 
        - Future Enhancement
    validations:
      required: true

  - type: dropdown
    id: priority
    attributes:
      label: Priority
      description: How important is this feature?
      options:
        - Critical
        - High
        - Medium
        - Low
    validations:
      required: true
