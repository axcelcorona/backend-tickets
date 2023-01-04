import { Request, Response, Router } from 'express';

const router = Router();

/**
 * Get all Ticket
 */
router.get('/', (req: Request, res: Response) => {
	try {
		res.send({
			message: 'Get all ticket',
		});
		res.status(200);
	} catch (error) {
		res.send({
			message: error,
		});
		res.status(404);
	}
});

/**
 * Get ticket
 */

router.get('/:id', (req: Request, res: Response) => {
	try {
		res.send({
			message: 'Get one ticke',
		});
		res.status(200);
	} catch (error) {
		res.status(404);
	}
});

/**
 * Create ticket
 */

router.post('/create', (req: Request, res: Response) => {
	try {
		res.send({
			message: 'Create a new ticket',
		});
		res.status(200);
	} catch (error) {
		res.status(400);
	}
});

/**
 * Update Ticket
 */

router.put('/update/:id', (req: Request, res: Response) => {
	try {
		res.send({
			message: 'Update to ticket',
		});
		res.status(200);
	} catch (error) {
		res.status(400);
	}
});

/**
 * Delete Ticket
 */

router.delete('/delete/:id', (req: Request, res: Response) => {
	try {
		res.send({
			message: 'Delete ticket',
		});
		res.status(200);
	} catch (error) {
		res.status(400);
	}
});

export default router;
