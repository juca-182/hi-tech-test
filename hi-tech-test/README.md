# Hi Tech Test Angular Application

## Prerequisites

 - Node.js v20.17.0
 - npm v10.8.2
 - Docker (if running with Docker)


## Local Development Setup

1. Clone the repository

```
git clone https://github.com/juca-182/hi-tech-test.git
cd hi-tech-test
```
2. Install dependencies
```
npm install
```
3. Run the development server
```
ng serve
```

Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Docker Setup

1. Build the docker image

```
docker build -t hi-tech-test .
```
2. Run the Docker container
```
docker run -d -p 4200:80 hi-tech-test
```
The application will be available at http://localhost:4200
