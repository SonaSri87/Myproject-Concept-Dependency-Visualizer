# Concept Dependency Visualizer
Live Demo- https://sonasri87.github.io/Myproject-Concept-Dependency-Visualizer/

## Overview

Concept Dependency Visualizer is a graph-based learning platform that helps students understand prerequisite relationships between concepts, generate personalized learning paths, track progress, identify knowledge gaps, and monitor learning achievements.

The project is built using HTML, CSS, and JavaScript and uses Graph Data Structures and Depth First Search (DFS) to generate learning roadmaps.

---

## Features

### Learning Path Generator
- Select a target concept.
- Automatically generates the correct learning order.
- Uses DFS traversal to resolve prerequisites.

### Concept Search
- Search concepts instantly.
- Find topics available in the learning graph.

### Concept Dependency Graph
- Visual representation of concept relationships.
- Helps learners understand dependencies.

### Progress Tracker
- Mark concepts as completed.
- Progress is stored using Local Storage.

### Dashboard
- Total Concepts
- Completed Concepts
- Remaining Concepts
- Progress Percentage

### Knowledge Gap Analyzer
- Identifies concepts not yet completed.
- Helps learners focus on missing topics.

### Learning Analytics
- Calculates completion percentage.
- Displays learner skill level.

### Learning Timeline
- Records completed concepts with dates.
- Tracks learning history.

### Achievement Badges
- Earn badges based on progress.
- Motivates continuous learning.

### Weekly Goal Tracker
- Set learning goals.
- Monitor goal completion.

### Learning Report
- Generate and download progress reports.

### Certificate Generation
- Generates certificate after completing all concepts.

### Login System
- User login using Local Storage.
- Personalized learning experience.

### Theme Switcher
- Dark Theme
- Light Theme

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Storage
- Browser Local Storage

### Data Structures
- Graph
- Arrays
- Objects
- Sets

### Algorithms
- Depth First Search (DFS)
- Graph Traversal

---

## Project Structure

```text
Concept-Dependency-Visualizer
│
├── index.html
├── login.html
├── dashboard.html
├── roadmap.html
├── graph.html
├── certificate.html
│
├── style.css
├── dashboard.css
├── graph.css
│
├── app.js
├── roadmap.js
├── tracker.js
├── graph.js
├── storage.js
│
├── concepts.js
├── conceptInfo.js
│
└── README.md
```

---

## How It Works

### Graph Representation

Each concept is represented as a node.

Example:

```javascript
const concepts = {
    "Arrays": ["Functions"],
    "Linked List": ["Arrays"],
    "Stack": ["Linked List"]
};
```

This means:

```text
Functions
   ↓
Arrays
   ↓
Linked List
   ↓
Stack
```

---

## Learning Path Generation

The roadmap generator uses DFS.

Example:

Target Concept:

```text
Dynamic Programming
```

Generated Path:

```text
Programming Fundamentals
Functions
Recursion
Dynamic Programming
```

---

## Algorithm Used

### Depth First Search (DFS)

Pseudo Code:

```javascript
function dfs(concept)
{
    visit all prerequisites

    visit concept
}
```

### Time Complexity

```text
O(V + E)
```

Where:

- V = Number of Concepts
- E = Number of Dependencies

---

## Dashboard Metrics

The dashboard displays:

- Total Concepts
- Completed Concepts
- Remaining Concepts
- Progress Percentage
- Learning Analytics
- Weekly Goals
- Achievement Badges

---

## Advantages

- Structured learning approach
- Visual dependency understanding
- Personalized learning paths
- Progress tracking
- Knowledge gap identification
- Improved learning efficiency

---

## Future Enhancements

- AI-based roadmap recommendations
- Backend integration
- User authentication database
- Interactive graph visualization libraries
- Cloud synchronization
- Mobile application support

---

## Sample Use Case

A student wants to learn:

```text
Dynamic Programming
```

Instead of directly starting DP, the system suggests:

```text
Programming Fundamentals
→ Functions
→ Recursion
→ Dynamic Programming
```

This ensures proper prerequisite coverage.

---

## Challenges Faced

- Designing dependency relationships
- Generating correct roadmap order
- Managing user progress
- Theme management
- Local Storage synchronization

---

## Learning Outcomes

This project demonstrates understanding of:

- Graph Data Structures
- DFS Traversal
- Dependency Resolution
- Frontend Development
- DOM Manipulation
- Local Storage
- Algorithm Design
- User Interface Development

---

## Author
By Sonasri
Developed as an educational project to help learners visualize concept dependencies and generate structured learning paths.
