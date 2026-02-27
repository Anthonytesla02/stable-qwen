# Qwen-Image Free API Wrapper

This is a simple Node.js server that wraps the Qwen-Image-Fast model on Hugging Face ZeroGPU. It allows you to generate images via a standard REST API without managing credits.

## How it works
It uses the `@gradio/client` to connect to a high-performance, free-to-use community space on Hugging Face. This space uses ZeroGPU, which means it's fast and doesn't require a paid subscription.

## Deployment Instructions

### Option 1: Render (Easiest)
1. Create a free account at [render.com](https://render.com).
2. Connect your GitHub repository (upload these files to a new repo).
3. Create a new **Web Service**.
4. Use the following settings:
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Click **Create Web Service**.

### Option 2: Railway
1. Create an account at [railway.app](https://railway.app).
2. Create a new project and select **Deploy from GitHub repo**.
3. Railway will automatically detect the `package.json` and deploy it.

## Usage
Once deployed, you can generate images by sending a POST request to your URL:

**Endpoint**: `POST /generate`

**Body (JSON)**:
```json
{
  "prompt": "A futuristic city in the style of Blade Runner",
  "aspect_ratio": "16:9"
}
```

**Response**:
```json
{
  "success": true,
  "image_url": "https://...",
  "metadata": { ... }
}
```

## Note on Limitations
While the model is free and doesn't use credits, Hugging Face ZeroGPU has global usage limits. If you hit these limits, you may need to wait a few minutes before generating more images.
