---
id: "topic-0-7"
stageId: "stage-0"
title: "Error Handling & Exception Management"
description: "A comprehensive guide to mastering Error Handling & Exception Management. This topic is essential for your growth as a Data Scientist."
timeToComplete: "4 hours"
difficulty: "Beginner"
prerequisites: []
skillsGained: ["Exceptions","try/except","Logging"]
---

# Error Handling & Exception Management

Welcome to the definitive guide on **Error Handling**.

In data science, pipelines break. APIs rate-limit you, datasets have missing columns, and models fail to converge. Robust error handling prevents your 10-hour training script from crashing 9 hours in.

## Try / Except Blocks
You should anticipate where code might fail and wrap it in a `try/except` block.

```python
def calculate_conversion_rate(clicks, purchases):
    try:
        rate = purchases / clicks
        return rate
    except ZeroDivisionError:
        print("Warning: Clicks cannot be zero. Returning 0.")
        return 0.0
    except TypeError:
        print("Error: Invalid data type provided.")
        return None
```

## Raising Exceptions
If your function receives bad data, you should actively raise an error to stop execution before corrupted data ruins a model.

```python
def validate_age(age):
    if age < 0 or age > 120:
        raise ValueError(f"Invalid age provided: {age}. Age must be between 0 and 120.")
    return True
```

## Logging (Not Printing)
In production, `print()` statements are lost. Always use the built-in `logging` module.

```python
import logging

logging.basicConfig(level=logging.INFO)

logging.info("Starting model training...")
logging.error("Failed to load dataset!")
```

## Key Takeaways
1. Never use a bare `except:` statement. Always catch specific exceptions (like `ValueError`).
2. Transition from `print()` to `logging.info()` as early as possible in your career.

