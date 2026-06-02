const conceptInfo = {

    // Programming Basics

    "Programming Fundamentals": {
        difficulty: "Beginner",
        time: "5 Hours",
        description:
        "Foundation of programming concepts and logic building."
    },

    "Variables & Data Types": {
        difficulty: "Beginner",
        time: "2 Hours",
        description:
        "Stores and manages different types of data."
    },

    "Operators": {
        difficulty: "Beginner",
        time: "2 Hours",
        description:
        "Performs arithmetic, logical and comparison operations."
    },

    "Control Statements": {
        difficulty: "Beginner",
        time: "3 Hours",
        description:
        "Controls program flow using conditions and loops."
    },

    "Functions": {
        difficulty: "Beginner",
        time: "3 Hours",
        description:
        "Reusable blocks of code for modular programming."
    },

    // DSA

    "Arrays": {
        difficulty: "Beginner",
        time: "3 Hours",
        description:
        "Stores elements in contiguous memory locations."
    },

    "Strings": {
        difficulty: "Beginner",
        time: "2 Hours",
        description:
        "Sequence of characters used for text processing."
    },

    "Recursion": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Technique where a function calls itself."
    },

    "Linked List": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Linear data structure consisting of connected nodes."
    },

    "Stack": {
        difficulty: "Intermediate",
        time: "2 Hours",
        description:
        "Follows Last In First Out principle."
    },

    "Queue": {
        difficulty: "Intermediate",
        time: "2 Hours",
        description:
        "Follows First In First Out principle."
    },

    "Trees": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Hierarchical data structure consisting of nodes."
    },

    "Binary Tree": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Tree where each node has at most two children."
    },

    "Binary Search Tree": {
        difficulty: "Intermediate",
        time: "5 Hours",
        description:
        "Ordered binary tree enabling efficient search."
    },

    "Heap": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Special tree structure used in priority queues."
    },

    "Hashing": {
        difficulty: "Intermediate",
        time: "3 Hours",
        description:
        "Technique for fast data retrieval using hash functions."
    },

    "Graph": {
        difficulty: "Advanced",
        time: "6 Hours",
        description:
        "Collection of vertices and edges."
    },

    "DFS": {
        difficulty: "Intermediate",
        time: "3 Hours",
        description:
        "Depth First Search traverses graph nodes recursively."
    },

    "BFS": {
        difficulty: "Intermediate",
        time: "3 Hours",
        description:
        "Breadth First Search explores graph level by level."
    },

    "Dijkstra": {
        difficulty: "Advanced",
        time: "5 Hours",
        description:
        "Shortest path algorithm used in weighted graphs."
    },

    "Greedy Algorithms": {
        difficulty: "Advanced",
        time: "5 Hours",
        description:
        "Makes locally optimal choices to solve problems."
    },

    "Dynamic Programming": {
        difficulty: "Advanced",
        time: "8 Hours",
        description:
        "Optimization technique using overlapping subproblems."
    },

    "Backtracking": {
        difficulty: "Advanced",
        time: "6 Hours",
        description:
        "Explores all possible solutions systematically."
    },

    "Trie": {
        difficulty: "Advanced",
        time: "5 Hours",
        description:
        "Tree structure used for efficient string operations."
    },

    "Segment Tree": {
        difficulty: "Advanced",
        time: "7 Hours",
        description:
        "Efficient data structure for range queries."
    },

    "Disjoint Set Union": {
        difficulty: "Advanced",
        time: "5 Hours",
        description:
        "Supports union and find operations efficiently."
    },

    // System Design

    "Database Basics": {
        difficulty: "Beginner",
        time: "4 Hours",
        description:
        "Introduction to storing and managing data."
    },

    "SQL": {
        difficulty: "Beginner",
        time: "4 Hours",
        description:
        "Language used to interact with relational databases."
    },

    "Indexing": {
        difficulty: "Intermediate",
        time: "3 Hours",
        description:
        "Improves database query performance."
    },

    "Caching": {
        difficulty: "Intermediate",
        time: "3 Hours",
        description:
        "Stores frequently accessed data for faster retrieval."
    },

    "Load Balancing": {
        difficulty: "Advanced",
        time: "5 Hours",
        description:
        "Distributes traffic across multiple servers."
    },

    "System Design Fundamentals": {
        difficulty: "Intermediate",
        time: "6 Hours",
        description:
        "Core concepts of scalable software systems."
    },

    "Scalability": {
        difficulty: "Advanced",
        time: "5 Hours",
        description:
        "Ability of a system to handle increasing load."
    },

    "Microservices": {
        difficulty: "Advanced",
        time: "7 Hours",
        description:
        "Architecture using independent deployable services."
    },

    "API Design": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Designing effective interfaces for applications."
    },

    // Web Development

    "HTML": {
        difficulty: "Beginner",
        time: "3 Hours",
        description:
        "Structures content on web pages."
    },

    "CSS": {
        difficulty: "Beginner",
        time: "4 Hours",
        description:
        "Styles and designs web pages."
    },

    "JavaScript": {
        difficulty: "Intermediate",
        time: "8 Hours",
        description:
        "Adds interactivity and logic to websites."
    },

    "DOM Manipulation": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Allows JavaScript to modify webpage elements."
    },

    "Responsive Design": {
        difficulty: "Intermediate",
        time: "3 Hours",
        description:
        "Ensures websites adapt to all screen sizes."
    },

    "Local Storage": {
        difficulty: "Intermediate",
        time: "2 Hours",
        description:
        "Stores user data in the browser."
    },

    // CS Subjects

    "Operating Systems": {
        difficulty: "Intermediate",
        time: "6 Hours",
        description:
        "Manages hardware and software resources."
    },

    "Process Scheduling": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Determines execution order of processes."
    },

    "Deadlocks": {
        difficulty: "Advanced",
        time: "4 Hours",
        description:
        "Situation where processes wait indefinitely."
    },

    "Computer Networks": {
        difficulty: "Intermediate",
        time: "5 Hours",
        description:
        "Study of communication between devices."
    },

    "OSI Model": {
        difficulty: "Intermediate",
        time: "3 Hours",
        description:
        "Seven-layer networking architecture."
    },

    "TCP/IP": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Core communication protocol suite."
    },

    "DBMS": {
        difficulty: "Intermediate",
        time: "5 Hours",
        description:
        "Software used to manage databases."
    },

    "Normalization": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Reduces redundancy in database tables."
    },

    "Transactions": {
        difficulty: "Intermediate",
        time: "4 Hours",
        description:
        "Ensures reliable database operations."
    },

    "OOP": {
        difficulty: "Beginner",
        time: "5 Hours",
        description:
        "Programming paradigm based on objects."
    },

    "Encapsulation": {
        difficulty: "Beginner",
        time: "2 Hours",
        description:
        "Bundles data and methods together."
    },

    "Inheritance": {
        difficulty: "Beginner",
        time: "2 Hours",
        description:
        "Allows one class to acquire properties of another."
    },

    "Polymorphism": {
        difficulty: "Intermediate",
        time: "3 Hours",
        description:
        "Allows methods to behave differently."
    },

    "Problem Solving": {
        difficulty: "Intermediate",
        time: "10 Hours",
        description:
        "Developing logical approaches to solve coding problems."
    },

    "Competitive Programming": {
        difficulty: "Advanced",
        time: "20 Hours",
        description:
        "Solving algorithmic challenges under constraints."
    },

    "Interview Preparation": {
        difficulty: "Advanced",
        time: "25 Hours",
        description:
        "Comprehensive preparation for technical interviews."
    }
};