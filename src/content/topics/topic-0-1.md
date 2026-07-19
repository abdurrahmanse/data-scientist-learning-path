---
id: "topic-0-1"
stageId: "stage-0"
title: "Python Basics & Data Structures"
description: "A comprehensive guide to mastering Python Basics & Data Structures. This topic is essential for your growth as a Data Scientist."
timeToComplete: "10 hours"
difficulty: "Beginner"
prerequisites: []
skillsGained: ["Python","Variables","Lists","Dictionaries"]
---

# Python Basics & Data Structures

Welcome to the definitive guide on **Python Basics & Data Structures**.

Python is the absolute backbone of modern Data Science. In this module, you will learn how to declare variables, understand primitive data types, and manipulate complex data structures like Lists and Dictionaries.

## Primitive Data Types
Python has several core primitive types:
- **Integers (`int`)**: Whole numbers.
- **Floats (`float`)**: Decimal numbers.
- **Strings (`str`)**: Text enclosed in quotes.
- **Booleans (`bool`)**: `True` or `False`.

## Core Data Structures

### Lists
Lists are ordered, mutable collections of items. They are incredibly versatile.
```python
# Creating a list
data_scientists = ["Alice", "Bob", "Charlie"]

# Appending to a list
data_scientists.append("Diana")

# Accessing by index
first_scientist = data_scientists[0]
```

### Dictionaries
Dictionaries store data in key-value pairs, making data retrieval extremely fast and intuitive.
```python
# Creating a dictionary
model_metrics = {
    "accuracy": 0.95,
    "f1_score": 0.92,
    "model_name": "RandomForest"
}

# Accessing values
print(model_metrics["accuracy"]) # Output: 0.95
```

## Key Takeaways
1. Always choose the right data structure. Use Lists for ordered sequences and Dictionaries for key-value lookups.
2. Python is dynamically typed, meaning you don't need to declare types explicitly, but you must be aware of what type your variables hold to avoid errors in data processing!

