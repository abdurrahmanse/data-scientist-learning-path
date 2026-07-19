---
id: "topic-0-9"
stageId: "stage-0"
title: "Writing Unit Tests in Python"
description: "A comprehensive guide to mastering Writing Unit Tests in Python. This topic is essential for your growth as a Data Scientist."
timeToComplete: "8 hours"
difficulty: "Intermediate"
prerequisites: []
skillsGained: ["pytest","unittest","TDD"]
---

# Writing Unit Tests in Python

Welcome to the definitive guide on **Unit Testing**.

How do you know your data transformation logic actually works? You write unit tests. A unit test automatically verifies that a specific function returns the expected output.

## The `pytest` Framework
`pytest` is the industry standard for testing Python code.

Suppose you have a function in `data_prep.py`:
```python
def normalize_score(score, max_score):
    if max_score <= 0:
        raise ValueError("max_score must be positive")
    return score / max_score
```

You would create a file named `test_data_prep.py`:
```python
import pytest
from data_prep import normalize_score

def test_normalize_score_standard():
    assert normalize_score(50, 100) == 0.5
    assert normalize_score(0, 100) == 0.0

def test_normalize_score_error():
    with pytest.raises(ValueError):
        normalize_score(50, 0)
```

## Running Tests
To run your tests, simply type `pytest` in your terminal:
```bash
pytest test_data_prep.py -v
```

## Key Takeaways
1. Write tests for edge cases (e.g., negative numbers, empty lists, null values).
2. Test-Driven Development (TDD) involves writing the test *before* you write the actual function!

