import { z } from 'zod';

export const estimateRecipeTimeSchema = z.object({
    estimatedTimeInMinutes: z.number().min(1, 
        'Estimated time must be at least 1 minute'),
});