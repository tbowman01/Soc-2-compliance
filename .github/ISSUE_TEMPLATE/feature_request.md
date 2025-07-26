name: 💡 Feature Request
description: Suggest a feature or improvement
title: "[FEATURE] <feature description>"
labels: [enhancement]
assignees: []

body:
  - type: input
    id: summary
    attributes:
      label: What's the enhancement?
      placeholder: "Add support for custom control categories..."
    validations:
      required: true

  - type: textarea
    id: details
    attributes:
      label: Detailed description
      description: Explain what you’d like to see and why it's useful
    validations:
      required: true
