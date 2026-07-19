---
id: "topic-0-2"
stageId: "stage-0"
title: "Object-Oriented Programming (OOP) in Python"
description: "A comprehensive guide to mastering Object-Oriented Programming (OOP) in Python. This topic is essential for your growth as a Data Scientist."
timeToComplete: "8 hours"
difficulty: "Beginner"
prerequisites: []
skillsGained: ["Classes","Inheritance","Polymorphism"]
---

# Object-Oriented Programming (OOP) in Python

Welcome to the definitive guide on **Object-Oriented Programming (OOP) in Python**.

As a Data Scientist, you won't just write scripts; you will build reusable, scalable software. OOP allows you to bundle data and behavior into manageable objects.

## Core OOP Concepts

1. **Classes**: Blueprints for creating objects.
2. **Objects**: Instances of classes.
3. **Inheritance**: Creating new classes based on existing ones.
4. **Polymorphism**: Using a unified interface for different types of objects.

## Implementation Example
Here is how you might use OOP to build a reusable Data Preprocessor class:

```python
class DataPreprocessor:
    def __init__(self, handle_missing="mean"):
        """
        Constructor method that initializes the object.
        """
        self.handle_missing = handle_missing
        self.is_fitted = False

    def fit(self, data):
        """
        Learns parameters from the data.
        """
        print(f"Fitting data using strategy: {self.handle_missing}")
        self.is_fitted = True

    def transform(self, data):
        """
        Applies the transformation.
        """
        if not self.is_fitted:
            raise ValueError("You must fit the preprocessor before transforming!")
        print("Transforming data...")
        return data

# Using the class
preprocessor = DataPreprocessor(handle_missing="median")
preprocessor.fit([1, 2, None, 4])
cleaned_data = preprocessor.transform([1, 2, None, 4])
```

## Key Takeaways
1. Use `__init__` to initialize your object's state.
2. Encapsulation helps keep your machine learning pipelines modular and easy to debug.
3. Inheritance is useful when building multiple models that share common evaluation logic!

