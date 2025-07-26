name: Bug Report
description: Report a bug in ADRScan
title: "[BUG] "
labels: ["bug"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for reporting a bug! Please fill out the sections below to help us fix it.

  - type: textarea
    id: description
    attributes:
      label: Bug Description
      description: A clear and concise description of what the bug is
      placeholder: Describe the bug...
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: Steps to reproduce the behavior
      placeholder: |
        1. Run command '...'
        2. See error
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: A clear description of what you expected to happen
      placeholder: What should have happened?
    validations:
      required: true

  - type: textarea
    id: environment
    attributes:
      label: Environment
      description: Information about your environment
      placeholder: |
        - OS: [e.g. Linux, Windows, macOS]
        - ADRScan version: [e.g. 0.1.0]
        - Rust version: [e.g. 1.70.0]
    validations:
      required: true
