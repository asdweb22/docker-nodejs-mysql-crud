# 🚀 Dockerized Student Management System

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-5.x-black?logo=express)
![MySQL](https://img.shields.io/badge/MySQL-8.4-blue?logo=mysql)
![Docker](https://img.shields.io/badge/Docker-Latest-2496ED?logo=docker)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-v2-blue?logo=docker)
![REST API](https://img.shields.io/badge/API-REST-orange)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# 📖 Project Overview

The **Dockerized Student Management System** is a production-style CRUD (Create, Read, Update, Delete) application built using **Node.js**, **Express.js**, **MySQL**, **Docker**, and **Docker Compose**.

The project demonstrates how multiple containers communicate with each other using Docker networking while persisting data through Docker volumes.

Instead of storing application data in memory, the application performs CRUD operations on a MySQL database running inside a separate Docker container.

This project follows real-world containerization practices and provides a complete development environment using Docker Compose.

---

# 🎯 Project Objectives

The main objectives of this project are:

- Learn Docker containerization
- Understand multi-container applications
- Connect Node.js with MySQL using Docker Network
- Store database data using Docker Volumes
- Manage environment variables securely
- Build REST APIs using Express.js
- Practice Docker Compose
- Understand production-ready application architecture

---

# ✨ Features

✔ Student Management CRUD API

✔ Dockerized Node.js Application

✔ MySQL Database Container

✔ Docker Compose

✔ Docker Network Communication

✔ Docker Volumes for Persistent Storage

✔ Environment Variable Configuration

✔ RESTful API Design

✔ JSON Request & Response

✔ Professional Project Structure

✔ Easy Local Setup

✔ Ready for Cloud Deployment

---

# 🛠 Tech Stack

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| Node.js        | JavaScript Runtime            |
| Express.js     | Backend Framework             |
| MySQL 8.4      | Relational Database           |
| Docker         | Containerization              |
| Docker Compose | Multi-container Orchestration |
| Docker Volume  | Persistent Database Storage   |
| Docker Network | Container Communication       |
| Thunder Client | API Testing                   |
| Git            | Version Control               |
| GitHub         | Source Code Hosting           |

---

# 🏗 System Architecture

```

                   User

                     │

                     ▼

           http://localhost:3000

                     │

                     ▼

     +-------------------------------+

     |     Node.js Express API       |

     |       Docker Container        |

     +-------------------------------+

                     │

             Docker Network

                     │

                     ▼

     +-------------------------------+

     |      MySQL Database           |

     |      Docker Container         |

     +-------------------------------+

                     │

                     ▼

        Docker Volume (Persistent)

```

---

# 🔄 Project Workflow

```

          Client

             │

             ▼

      REST API Request

             │

             ▼

      Express.js Server

             │

             ▼

     MySQL Database Query

             │

             ▼

     Execute SQL Operation

             │

             ▼

       Return JSON Response

             │

             ▼

           Client

```

---

# 📂 Project Structure

```

dockerized-student-management/

│

├── server.js

├── db.js

├── Dockerfile

├── docker-compose.yml

├── package.json

├── package-lock.json

├── .env.example

├── .dockerignore

├── .gitignore

├── README.md

│

└── screenshots/

      ├── architecture.png

      ├── docker-containers.png

      ├── thunder-get.png

      ├── thunder-post.png

      ├── thunder-put.png

      ├── thunder-delete.png

      ├── mysql-table.png

      └── docker-compose.png

```

---

# 📌 How This Project Works

This application consists of two Docker containers.

### 1️⃣ Node.js Container

- Runs the Express.js backend application.
- Receives HTTP requests from the client.
- Performs CRUD operations.
- Connects to the MySQL container using Docker networking.
- Returns JSON responses.

---

### 2️⃣ MySQL Container

- Stores student information.
- Executes SQL queries.
- Persists data using Docker Volumes.
- Communicates only with the Node.js container.

---

### 3️⃣ Docker Network

Docker Compose automatically creates a private bridge network.

Instead of using an IP address, the Node.js application connects to MySQL using the service name:

```javascript
host: "mysql-db";
```

Docker automatically resolves this hostname to the correct container.

---

### 4️⃣ Docker Volume

The MySQL database stores its data inside a Docker Volume.

Because of this, even if the MySQL container is removed and recreated, the student records remain intact.

This demonstrates one of Docker's most important concepts: **persistent storage**.

---

# 🚀 Project Highlights

This project demonstrates the following Docker concepts:

- Docker Images
- Docker Containers
- Dockerfile
- Docker Hub
- Docker Networking
- Docker Volumes
- Docker Compose
- Environment Variables
- Container Communication
- Persistent Storage
- Multi-Container Applications

It also demonstrates backend development concepts including:

- REST APIs
- CRUD Operations
- Express.js
- MySQL Integration
- JSON APIs
- SQL Queries
- Error Handling

---
