---
id: "topic-0-10"
stageId: "stage-0"
title: "Markdown & Documentation"
description: "A comprehensive guide to mastering Markdown & Documentation. This topic is essential for your growth as a Data Scientist."
timeToComplete: "3 hours"
difficulty: "Beginner"
prerequisites: []
skillsGained: ["Sphinx","Markdown","Jupyter"]
---

# Markdown & Documentation

Welcome to the definitive guide on **Markdown & Documentation**.

A Data Scientist's job is not done when the model is trained; it is done when the results are clearly communicated to stakeholders. Markdown is the industry standard for writing documentation.

## Markdown Basics
Markdown uses simple symbols to format text:

```markdown
# Heading 1
## Heading 2

**Bold Text** and *Italic Text*

- Bullet points
- Are easy

1. Numbered lists
2. Are also easy

[Link to Google](https://google.com)
```

## Docstrings
In Python, you should document your functions using triple quotes (`"""`). The industry standard is the **Google Style Docstring**.

```python
def calculate_rmse(y_true, y_pred):
    """
    Calculates the Root Mean Squared Error.

    Args:
        y_true (list): The actual target values.
        y_pred (list): The predicted target values.

    Returns:
        float: The calculated RMSE score.
    """
    pass
```

## Key Takeaways
1. A Jupyter Notebook should contain almost as much Markdown explaining your thought process as it does Python code!
2. Write docstrings for every single function you create. It saves you and your teammates hours of confusion later.

