import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { estimateRecipeTimeSchema } from '../schemas/estimateRecipeTimeSchema.js';

export class EstimateRecipeTimeController {
    async estimateTime(req: any, res: any) {
        try {
            const body = req.body;

            if (!body) {
                return res.status(400).json({ error: 'No Body' });
            }

            const { data } = body;

            const prompt = `
                Based on the following recipe instructions, estimate the total preparation time in minutes. 
                Only provide the numeric estimate, no additional text.
                Recipe instructions:
                ${data}
            `;

            const { text } = await generateText({
                model: openai('gpt-4o-mini'),
                prompt: prompt,
            });

            const timeInMinutes = parseInt(text.trim(), 10);

            if (isNaN(timeInMinutes)) {
                return res.status(500).json({ error: 'Failed to generate a valid time estimate' });
            }

            const response = { estimatedTimeInMinutes: timeInMinutes };

            const validation = estimateRecipeTimeSchema.safeParse(response);
            if (!validation.success) {
                return res.status(400).json({ error: 'Invalid response format', details: validation.error.errors });
            }

            res.json(response);
        } catch (error) {
            console.error('Error estimating recipe time:', error);
            res.status(500).json({ error: 'An error occurred while estimating the recipe time' });
        }
    }
}