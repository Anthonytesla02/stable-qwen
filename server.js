import express from 'express';
import { Client } from "@gradio/client";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/generate', async (req, res) => {
    const { prompt, aspect_ratio = "1:1" } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        console.log(`Generating image for prompt: ${prompt}`);
        const client = await Client.connect("multimodalart/Qwen-Image-Fast");
        
        const result = await client.predict("/infer", { 
            prompt: prompt, 
            seed: 0, 
            randomize_seed: true, 
            aspect_ratio: aspect_ratio, 
            guidance_scale: 1, 
            num_inference_steps: 4, 
            prompt_enhance: true, 
        });

        // result.data contains the image information
        // In Gradio 5+, this is usually an array of objects
        res.json({
            success: true,
            image_url: result.data[0].url,
            metadata: result.data[0]
        });
    } catch (error) {
        console.error("Generation error:", error);
        res.status(500).json({ 
            success: false, 
            error: "Failed to generate image",
            details: error.message 
        });
    }
});

app.get('/', (req, res) => {
    res.send('Qwen-Image API Wrapper is running. Send a POST request to /generate with { "prompt": "..." }');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
