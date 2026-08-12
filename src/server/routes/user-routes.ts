import { NextFunction, Request, Response, Router } from 'express';
import { User } from '../classes/user-class.js';

const router: Router = Router();

router.get('/user', (req: Request, res: Response, next: NextFunction) => {
    const user: User = new User('Test User', 'testuser@example.com');
    const username: string = user.getName(); 
    res.status(200).send(`Hello, ${username}!`);
  }
);

export const UserRoutes: Router = router;