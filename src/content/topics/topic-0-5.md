---
id: "topic-0-5"
stageId: "stage-0"
title: "Command Line Basics & Shell Scripting"
description: "A comprehensive guide to mastering Command Line Basics & Shell Scripting. This topic is essential for your growth as a Data Scientist."
timeToComplete: "5 hours"
difficulty: "Beginner"
prerequisites: []
skillsGained: ["Bash","CLI","File Navigation"]
---

# Command Line Basics & Shell Scripting

Welcome to the definitive guide on **Command Line Basics**.

Data Scientists spend a significant amount of time in the terminal—connecting to remote servers, running heavy training scripts, and managing cloud infrastructure. Mastering the CLI (Command Line Interface) is essential.

## Essential File Navigation Commands

- `pwd`: Print Working Directory (where am I?)
- `ls`: List files in the current directory (`ls -la` shows hidden files and permissions).
- `cd`: Change Directory.
- `mkdir`: Make a new directory.
- `rm`: Remove a file (`rm -r` removes a directory).

## Shell Scripting
You can automate repetitive tasks by writing shell scripts (`.sh` files).

```bash
#!/bin/bash
# A simple script to run a data pipeline

echo "Starting data extraction..."
python extract.py

echo "Starting data transformation..."
python transform.py

echo "Pipeline complete! 🚀"
```

To run this script, you must first make it executable:
```bash
chmod +x run_pipeline.sh
./run_pipeline.sh
```

## Key Takeaways
1. The terminal is faster and more powerful than graphical interfaces.
2. Be extremely careful with `rm -rf`, as it deletes files permanently without a recycle bin!

