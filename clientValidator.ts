import { Router } from 'express';
import { clientValidator } from '../validators/client/clientValidator';
import { validationResult } from 'express-validator';

const router = Router();

router.post('/clients', clientValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Handle client creation here
    res.status(201).send('Client created successfully');
});

export default router;
