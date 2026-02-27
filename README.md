Qwen-Image Free API Wrapper
This is a simple Node.js server that wraps the Qwen-Image-Fast model on Hugging Face ZeroGPU. It allows you to generate images via a standard REST API without managing credits.

How it works
It uses the @gradio/client to connect to a high-performance, free-to-use community space on Hugging Face. This space uses ZeroGPU, which means it's fast and doesn't require a paid subscription.

Deployment Instructions
Option 1: Render (Easiest)
Create a free account at render.com.
Connect your GitHub repository (upload these files to a new repo).
Create a new Web Service.
Use the following settings:
Runtime: Node
Build Command: npm install
Start Command: node server.js
Click Create Web Service.
Option 2: Railway
Create an account at railway.app.
Create a new project and select Deploy from GitHub repo.
Railway will automatically detect the package.json and deploy it.
