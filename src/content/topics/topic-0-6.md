---
id: "topic-0-6"
stageId: "stage-0"
title: "Advanced Python (Decorators, Generators)"
description: "A comprehensive guide to mastering Advanced Python (Decorators, Generators). This topic is essential for your growth as a Data Scientist."
timeToComplete: "8 hours"
difficulty: "Intermediate"
prerequisites: []
skillsGained: ["Decorators","Generators","Context Managers"]
---

# Advanced Python (Decorators, Generators)

Welcome to the definitive guide on **Advanced Python**.

Once you master basic Python, you need to learn advanced features that allow you to write memory-efficient and highly readable code, especially when dealing with massive datasets.

## Generators
Generators allow you to iterate over massive datasets without loading them entirely into memory. Instead of `return`, they use `yield`.

```python
def read_large_file(file_path):
    """Yields one line at a time from a large CSV."""
    with open(file_path, 'r') as file:
        for line in file:
            yield line.strip()

# This uses almost 0 MB of RAM, even if the file is 50GB!
for row in read_large_file("massive_data.csv"):
    process(row)
```

## Decorators
Decorators allow you to modify the behavior of a function without changing its source code. They are widely used for logging and timing machine learning models.

```python
import time

def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} took {end_time - start_time:.4f} seconds.")
        return result
    return wrapper

@timer_decorator
def train_model():
    time.sleep(2) # Simulating training time
    print("Model trained!")

train_model()
```

## Key Takeaways
1. Use Generators (`yield`) when working with datasets larger than your system RAM.
2. Use Decorators to add reusable logic (like timers or authentication) to multiple functions elegantly.

