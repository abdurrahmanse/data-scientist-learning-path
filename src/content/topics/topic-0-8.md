---
id: "topic-0-8"
stageId: "stage-0"
title: "Code Formatting & Linting"
description: "A comprehensive guide to mastering Code Formatting & Linting. This topic is essential for your growth as a Data Scientist."
timeToComplete: "4 hours"
difficulty: "Beginner"
prerequisites: []
skillsGained: ["Flake8","Black","Pylint"]
---

# Code Formatting & Linting

Welcome to the definitive guide on **Code Formatting & Linting**.

Data science code has a reputation for being messy. Writing clean, standardized code ensures your team can read, review, and maintain your algorithms.

## PEP 8
PEP 8 is the official style guide for Python. It dictates rules like:
- Use 4 spaces for indentation.
- Variable names should be `snake_case`.
- Class names should be `CamelCase`.

## Automated Formatters (Black)
Instead of manually fixing your code spacing, you should use an auto-formatter like **Black**. It rewrites your code to be perfectly PEP 8 compliant.

```bash
pip install black

# Auto-format your entire project
black my_project_directory/
```

## Linters (Flake8 / Pylint)
Linters do not change your code; they analyze it and yell at you if you made a mistake (like importing a library but never using it).

```bash
pip install flake8

# Check your code for errors
flake8 my_script.py
```

## Key Takeaways
1. Automate your formatting. Configure your IDE (VSCode/Cursor) to run "Format on Save" using Black.
2. Clean code is just as important as an accurate ML model. If others can't read it, it won't go to production.

