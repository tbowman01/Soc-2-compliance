name: 🐞 Bug Report
description: Report something broken or misbehaving in the repository
title: "[BUG] <short description>"
labels: [bug]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Thanks for helping improve this SOC 2 compliance toolkit!

  - type: input
    id: description
    attributes:
      label: What happened?
      description: Describe the issue in detail
      placeholder: "The GitHub Action failed to run on ..."
    validations:
      required: true

  - type: textarea
    id: logs
    attributes:
      label: Relevant logs or output
      description: Paste any output or logs that may help us reproduce the issue
    validations:
      required: false

  - type: dropdown
    id: impact
    attributes:
      label: Impact severity
      options:
        - Low
        - Medium
        - High
    validations:
      required: true
