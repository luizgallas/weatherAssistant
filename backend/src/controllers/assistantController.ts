import { Router, Request, Response } from 'express';
import { AssistantService } from '../services/assistantService';

const assistantController = Router();

const assistantService = new AssistantService();

assistantController.post('/chat', async (req: Request, res: Response) => {
    if (!req.body || !req.body.location) {
        return res.status(400).json({ error: 'A location is required to measure the weather conditions.' });
    }

    const { location } = req.body;

    try {
        const response = await assistantService.processAssistantTask(location);

        if (response) {
            res.send(response.text.value);
        } else {
            res.status(500).json({ error: "Unable to provide a recommendation for the given location." })
        }
    } catch(error) {
        res.status(500).json({ error });
    }
});



export default assistantController;