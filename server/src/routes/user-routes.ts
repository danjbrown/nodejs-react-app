import { NextFunction, Request, Response, Router } from 'express';
import { User } from '../classes/user-class.js';

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

const router: Router = Router();

router.get('/user', (req: Request, res: Response, next: NextFunction) => {
    const user: User = new User('Test User', 'testuser@example.com');
    const username: string = user.getUsername(); 
    res.status(StatusCodes.Success).send(`Hello, ${username}!`);
  }
);

router.get('/userdata', (req: Request, res: Response, next: NextFunction) => {
    const user: User = new User('Test User', 'testuser@example.com');
    const username: string = user.getUsername();
    const email: string = user.getEmail();
    res.status(StatusCodes.Success).json({ username: username, email: email });
  }
);

export const UserRoutes: Router = router;