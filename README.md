# 🍕 Food Express - Docker CI/CD Pipeline

## 📖 Project Overview

Food Express is a full-stack food ordering web application developed to demonstrate real-world DevOps practices. The project consists of separate frontend and backend applications with a MySQL database. The complete application is containerized using Docker and automated using GitHub Actions for Continuous Integration and Continuous Delivery (CI/CD).

Whenever code is pushed to the **main** branch, GitHub Actions automatically:

- ✅ Checks out the source code
- ✅ Builds Docker images
- ✅ Authenticates with Docker Hub
- ✅ Pushes Docker images to Docker Hub
- ✅ Runs frontend and backend containers
- ✅ Performs application health checks
- ✅ Verifies successful deployment

---

# 🏗️ Project Architecture

```text
                 Developer
                     │
                     ▼
             GitHub Repository
                     │
                     ▼
          GitHub Actions Workflow
                     │
      ┌──────────────┼──────────────┐
      │              │              │
      ▼              ▼              ▼
 Checkout      Build Docker Images  Docker Login
      │              │
      ▼              ▼
 Build Frontend   Build Backend
 Docker Image     Docker Image
      │              │
      └──────┬───────┘
             ▼
      Push Images to Docker Hub
             │
             ▼
      Run Docker Containers
             │
             ▼
      Health Check & Validation
```

---

# 🚀 Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### DevOps Tools
- Docker
- Docker Hub
- GitHub Actions
- Git
- GitHub

---

# 📁 Project Structure

```text
food-express-cicd/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── database/
│   └── init.sql
│
└── README.md
```

---

# ✨ Features

- Responsive Food Ordering Website
- REST API using Express.js
- MySQL Database Integration
- Dockerized Frontend
- Dockerized Backend
- GitHub Actions CI/CD
- Docker Hub Integration
- Automated Docker Image Build
- Automated Image Push
- Health Check Validation
- Container Verification

---

# 🔄 GitHub Actions CI/CD Pipeline

The pipeline is triggered automatically whenever code is pushed to the **main** branch.

### Pipeline Stages

### ✅ Stage 1
Checkout Source Code

### ✅ Stage 2
Verify Docker Installation

### ✅ Stage 3
Authenticate with Docker Hub

### ✅ Stage 4
Build Frontend Docker Image

### ✅ Stage 5
Build Backend Docker Image

### ✅ Stage 6
Verify Docker Images

### ✅ Stage 7
Push Frontend Image to Docker Hub

### ✅ Stage 8
Push Backend Image to Docker Hub

### ✅ Stage 9
Run Backend Container

### ✅ Stage 10
Run Frontend Container

### ✅ Stage 11
Verify Running Containers

### ✅ Stage 12
Display Container Logs

### ✅ Stage 13
Validate Frontend

### ✅ Stage 14
Validate Backend API

---

# 🐳 Docker Images

Frontend Image

```text
madhu934652/food-express-frontend:v1
```

Backend Image

```text
madhu934652/food-express-backend:v1
```

---

# 🔐 GitHub Secrets

The following secrets are configured inside the GitHub repository.

| Secret | Description |
|----------|-------------|
| DOCKER_USERNAME | Docker Hub Username |
| DOCKER_PASSWORD | Docker Hub Password / Access Token |
| DB_HOST | MySQL Host |
| DB_USER | MySQL Username |
| DB_PASSWORD | MySQL Password |
| DB_NAME | Database Name |
| DB_PORT | MySQL Port |

---

# 🌐 REST APIs

## Health Check

```
GET /health
```

Response

```
Food Express Backend Running
```

---

## Menu API

```
GET /api/menu
```

Returns the available food menu.

---

## Place Order

```
POST /order
```

Example Request

```json
{
    "food":"Pizza",
    "price":299
}
```

Example Response

```json
{
    "success": true,
    "message": "Order Placed Successfully"
}
```

---

# 💻 Run Project Locally

## Clone Repository

```bash
git clone https://github.com/Madhurichennupati010/food-express-cicd.git
```

Move into the project directory

```bash
cd food-express-cicd
```

---

## Backend

```bash
cd backend
npm install
node server.js
```

Backend URL

```
http://localhost:3000
```

---

## Frontend

Open

```
frontend/index.html
```

or

Run using Docker.

---

# 🐳 Docker Commands

## Build Backend

```bash
docker build -t food-express-backend ./backend
```

## Build Frontend

```bash
docker build -t food-express-frontend ./frontend
```

## Run Backend

```bash
docker run -d --name backend -p 3000:3000 food-express-backend
```

## Run Frontend

```bash
docker run -d --name frontend -p 8080:80 food-express-frontend
```

---

# ✅ Application Verification

Frontend

```
http://localhost:8080
```

Backend

```
http://localhost:3000/health
```

Menu API

```
http://localhost:3000/api/menu
```

---

# 📸 Screenshots

Add screenshots of:

- Food Express Home Page
- GitHub Repository
- Successful GitHub Actions Workflow
- Docker Images
- Running Docker Containers
- Docker Hub Repository
- MySQL Orders Table

---

# 📚 Key DevOps Concepts Demonstrated

- Docker Containerization
- Multi-Container Application
- GitHub Actions CI/CD
- Docker Hub Integration
- Continuous Integration
- Continuous Delivery
- Health Checks
- REST API Testing
- Secret Management
- Automated Docker Image Build
- Automated Docker Image Push

---

# 🔮 Future Enhancements

- Deploy on AWS EC2
- Docker Compose
- Kubernetes Deployment
- Jenkins Pipeline
- Amazon EKS
- NGINX Reverse Proxy
- Prometheus Monitoring
- Grafana Dashboard
- Terraform Infrastructure as Code

---

# 👩‍💻 Author

**Chennupati Madhuri**

**AWS | DevOps | Docker | Kubernetes | GitHub Actions | CI/CD**

---

## ⭐ If you found this project useful, please consider giving it a Star on GitHub.
