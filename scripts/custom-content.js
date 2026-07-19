export const customTopicContent = {
  "topic-0-1": `
# Python Basics & Data Structures

Welcome to the definitive guide on **Python Basics & Data Structures**.

Python is the absolute backbone of modern Data Science. In this module, you will learn how to declare variables, understand primitive data types, and manipulate complex data structures like Lists and Dictionaries.

## Primitive Data Types
Python has several core primitive types:
- **Integers (\`int\`)**: Whole numbers.
- **Floats (\`float\`)**: Decimal numbers.
- **Strings (\`str\`)**: Text enclosed in quotes.
- **Booleans (\`bool\`)**: \`True\` or \`False\`.

## Core Data Structures

### Lists
Lists are ordered, mutable collections of items. They are incredibly versatile.
\`\`\`python
# Creating a list
data_scientists = ["Alice", "Bob", "Charlie"]

# Appending to a list
data_scientists.append("Diana")

# Accessing by index
first_scientist = data_scientists[0]
\`\`\`

### Dictionaries
Dictionaries store data in key-value pairs, making data retrieval extremely fast and intuitive.
\`\`\`python
# Creating a dictionary
model_metrics = {
    "accuracy": 0.95,
    "f1_score": 0.92,
    "model_name": "RandomForest"
}

# Accessing values
print(model_metrics["accuracy"]) # Output: 0.95
\`\`\`

## Key Takeaways
1. Always choose the right data structure. Use Lists for ordered sequences and Dictionaries for key-value lookups.
2. Python is dynamically typed, meaning you don't need to declare types explicitly, but you must be aware of what type your variables hold to avoid errors in data processing!
`,
  "topic-0-2": `
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

\`\`\`python
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
\`\`\`

## Key Takeaways
1. Use \`__init__\` to initialize your object's state.
2. Encapsulation helps keep your machine learning pipelines modular and easy to debug.
3. Inheritance is useful when building multiple models that share common evaluation logic!
`,
  "topic-0-3": `
# Python Virtual Environments & Package Management

Welcome to the definitive guide on **Python Virtual Environments**.

One of the most common mistakes beginners make is installing all their Python packages globally. This leads to "Dependency Hell," where two projects require different versions of the same library (e.g., Pandas 1.x vs Pandas 2.x).

## What is a Virtual Environment?
A virtual environment is an isolated directory that contains a specific version of Python and a specific set of installed packages. 

## Tools of the Trade
- **pip & venv**: The standard, built-in tools for Python package management and environment creation.
- **Conda**: A powerful environment manager heavily used in Data Science because it handles non-Python dependencies (like C++ libraries for machine learning).

## Implementation Example: Using \`venv\`

Here is the standard workflow for creating an environment from the command line:

\`\`\`bash
# 1. Create a virtual environment named "ds_env"
python -m venv ds_env

# 2. Activate the environment (Mac/Linux)
source ds_env/bin/activate

# (On Windows, you would use: .\\ds_env\\Scripts\\activate)

# 3. Install packages safely
pip install pandas scikit-learn

# 4. Save your dependencies to a file
pip freeze > requirements.txt

# 5. Deactivate when you are done
deactivate
\`\`\`

## Key Takeaways
1. **Never use \`pip install\` globally.** Always create a virtual environment for a new project.
2. Always commit your \`requirements.txt\` or \`environment.yml\` to version control so others can reproduce your exact setup!
`,
  "topic-0-4": `
# Git & GitHub for Version Control

Welcome to the definitive guide on **Git & GitHub**.

Version control is non-negotiable in modern Data Science. It allows you to track changes, collaborate with other engineers, and revert mistakes when your models break.

## Git vs. GitHub
- **Git** is the local software running on your computer that tracks file history.
- **GitHub** is the cloud platform that hosts your Git repositories.

## The Core Git Workflow

When you are developing a new feature or analysis, you follow a standard loop:

\`\`\`bash
# 1. Check current status
git status

# 2. Stage your changes (add them to the next commit)
git add my_analysis.ipynb

# 3. Commit the changes with a descriptive message
git commit -m "Add exploratory data analysis for sales dataset"

# 4. Push the changes to GitHub
git push origin main
\`\`\`

## Branching
Never work directly on the \`main\` branch in a team setting. Create a branch!

\`\`\`bash
# Create and switch to a new branch
git checkout -b feature/model-tuning

# ... Do your work, commit, and push ...
git push origin feature/model-tuning
\`\`\`
After pushing, you will open a **Pull Request (PR)** on GitHub to have your code reviewed.

## Key Takeaways
1. Write clear, imperative commit messages (e.g., "Fix data leakage bug").
2. Commit often. It acts as a save point for your progress.
3. Don't commit massive datasets! Add \`.csv\` and \`.parquet\` files to your \`.gitignore\` file.
`,
  "topic-0-5": `
# Command Line Basics & Shell Scripting

Welcome to the definitive guide on **Command Line Basics**.

Data Scientists spend a significant amount of time in the terminal—connecting to remote servers, running heavy training scripts, and managing cloud infrastructure. Mastering the CLI (Command Line Interface) is essential.

## Essential File Navigation Commands

- \`pwd\`: Print Working Directory (where am I?)
- \`ls\`: List files in the current directory (\`ls -la\` shows hidden files and permissions).
- \`cd\`: Change Directory.
- \`mkdir\`: Make a new directory.
- \`rm\`: Remove a file (\`rm -r\` removes a directory).

## Shell Scripting
You can automate repetitive tasks by writing shell scripts (\`.sh\` files).

\`\`\`bash
#!/bin/bash
# A simple script to run a data pipeline

echo "Starting data extraction..."
python extract.py

echo "Starting data transformation..."
python transform.py

echo "Pipeline complete! 🚀"
\`\`\`

To run this script, you must first make it executable:
\`\`\`bash
chmod +x run_pipeline.sh
./run_pipeline.sh
\`\`\`

## Key Takeaways
1. The terminal is faster and more powerful than graphical interfaces.
2. Be extremely careful with \`rm -rf\`, as it deletes files permanently without a recycle bin!
`,
  "topic-0-6": `
# Advanced Python (Decorators, Generators)

Welcome to the definitive guide on **Advanced Python**.

Once you master basic Python, you need to learn advanced features that allow you to write memory-efficient and highly readable code, especially when dealing with massive datasets.

## Generators
Generators allow you to iterate over massive datasets without loading them entirely into memory. Instead of \`return\`, they use \`yield\`.

\`\`\`python
def read_large_file(file_path):
    """Yields one line at a time from a large CSV."""
    with open(file_path, 'r') as file:
        for line in file:
            yield line.strip()

# This uses almost 0 MB of RAM, even if the file is 50GB!
for row in read_large_file("massive_data.csv"):
    process(row)
\`\`\`

## Decorators
Decorators allow you to modify the behavior of a function without changing its source code. They are widely used for logging and timing machine learning models.

\`\`\`python
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
\`\`\`

## Key Takeaways
1. Use Generators (\`yield\`) when working with datasets larger than your system RAM.
2. Use Decorators to add reusable logic (like timers or authentication) to multiple functions elegantly.
`,
  "topic-0-7": `
# Error Handling & Exception Management

Welcome to the definitive guide on **Error Handling**.

In data science, pipelines break. APIs rate-limit you, datasets have missing columns, and models fail to converge. Robust error handling prevents your 10-hour training script from crashing 9 hours in.

## Try / Except Blocks
You should anticipate where code might fail and wrap it in a \`try/except\` block.

\`\`\`python
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
\`\`\`

## Raising Exceptions
If your function receives bad data, you should actively raise an error to stop execution before corrupted data ruins a model.

\`\`\`python
def validate_age(age):
    if age < 0 or age > 120:
        raise ValueError(f"Invalid age provided: {age}. Age must be between 0 and 120.")
    return True
\`\`\`

## Logging (Not Printing)
In production, \`print()\` statements are lost. Always use the built-in \`logging\` module.

\`\`\`python
import logging

logging.basicConfig(level=logging.INFO)

logging.info("Starting model training...")
logging.error("Failed to load dataset!")
\`\`\`

## Key Takeaways
1. Never use a bare \`except:\` statement. Always catch specific exceptions (like \`ValueError\`).
2. Transition from \`print()\` to \`logging.info()\` as early as possible in your career.
`,
  "topic-0-8": `
# Code Formatting & Linting

Welcome to the definitive guide on **Code Formatting & Linting**.

Data science code has a reputation for being messy. Writing clean, standardized code ensures your team can read, review, and maintain your algorithms.

## PEP 8
PEP 8 is the official style guide for Python. It dictates rules like:
- Use 4 spaces for indentation.
- Variable names should be \`snake_case\`.
- Class names should be \`CamelCase\`.

## Automated Formatters (Black)
Instead of manually fixing your code spacing, you should use an auto-formatter like **Black**. It rewrites your code to be perfectly PEP 8 compliant.

\`\`\`bash
pip install black

# Auto-format your entire project
black my_project_directory/
\`\`\`

## Linters (Flake8 / Pylint)
Linters do not change your code; they analyze it and yell at you if you made a mistake (like importing a library but never using it).

\`\`\`bash
pip install flake8

# Check your code for errors
flake8 my_script.py
\`\`\`

## Key Takeaways
1. Automate your formatting. Configure your IDE (VSCode/Cursor) to run "Format on Save" using Black.
2. Clean code is just as important as an accurate ML model. If others can't read it, it won't go to production.
`,
  "topic-0-9": `
# Writing Unit Tests in Python

Welcome to the definitive guide on **Unit Testing**.

How do you know your data transformation logic actually works? You write unit tests. A unit test automatically verifies that a specific function returns the expected output.

## The \`pytest\` Framework
\`pytest\` is the industry standard for testing Python code.

Suppose you have a function in \`data_prep.py\`:
\`\`\`python
def normalize_score(score, max_score):
    if max_score <= 0:
        raise ValueError("max_score must be positive")
    return score / max_score
\`\`\`

You would create a file named \`test_data_prep.py\`:
\`\`\`python
import pytest
from data_prep import normalize_score

def test_normalize_score_standard():
    assert normalize_score(50, 100) == 0.5
    assert normalize_score(0, 100) == 0.0

def test_normalize_score_error():
    with pytest.raises(ValueError):
        normalize_score(50, 0)
\`\`\`

## Running Tests
To run your tests, simply type \`pytest\` in your terminal:
\`\`\`bash
pytest test_data_prep.py -v
\`\`\`

## Key Takeaways
1. Write tests for edge cases (e.g., negative numbers, empty lists, null values).
2. Test-Driven Development (TDD) involves writing the test *before* you write the actual function!
`,
  "topic-0-10": `
# Markdown & Documentation

Welcome to the definitive guide on **Markdown & Documentation**.

A Data Scientist's job is not done when the model is trained; it is done when the results are clearly communicated to stakeholders. Markdown is the industry standard for writing documentation.

## Markdown Basics
Markdown uses simple symbols to format text:

\`\`\`markdown
# Heading 1
## Heading 2

**Bold Text** and *Italic Text*

- Bullet points
- Are easy

1. Numbered lists
2. Are also easy

[Link to Google](https://google.com)
\`\`\`

## Docstrings
In Python, you should document your functions using triple quotes (\`"""\`). The industry standard is the **Google Style Docstring**.

\`\`\`python
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
\`\`\`

## Key Takeaways
1. A Jupyter Notebook should contain almost as much Markdown explaining your thought process as it does Python code!
2. Write docstrings for every single function you create. It saves you and your teammates hours of confusion later.
`
};
