---
id: "topic-0-4"
stageId: "stage-0"
title: "Git & GitHub for Version Control"
description: "A comprehensive guide to mastering Git & GitHub for Version Control. This topic is essential for your growth as a Data Scientist."
timeToComplete: "6 hours"
difficulty: "Beginner"
prerequisites: []
skillsGained: ["Git","GitHub","Branching","Merging"]
---

# Git & GitHub for Version Control

Welcome to the definitive guide on **Git & GitHub**.

Version control is non-negotiable in modern Data Science. It allows you to track changes, collaborate with other engineers, and revert mistakes when your models break.

## Git vs. GitHub
- **Git** is the local software running on your computer that tracks file history.
- **GitHub** is the cloud platform that hosts your Git repositories.

## The Core Git Workflow

When you are developing a new feature or analysis, you follow a standard loop:

```bash
# 1. Check current status
git status

# 2. Stage your changes (add them to the next commit)
git add my_analysis.ipynb

# 3. Commit the changes with a descriptive message
git commit -m "Add exploratory data analysis for sales dataset"

# 4. Push the changes to GitHub
git push origin main
```

## Branching
Never work directly on the `main` branch in a team setting. Create a branch!

```bash
# Create and switch to a new branch
git checkout -b feature/model-tuning

# ... Do your work, commit, and push ...
git push origin feature/model-tuning
```
After pushing, you will open a **Pull Request (PR)** on GitHub to have your code reviewed.

## Key Takeaways
1. Write clear, imperative commit messages (e.g., "Fix data leakage bug").
2. Commit often. It acts as a save point for your progress.
3. Don't commit massive datasets! Add `.csv` and `.parquet` files to your `.gitignore` file.

