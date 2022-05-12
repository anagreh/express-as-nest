import { Router } from 'express';
import { getUser } from './users.service';
export const router = Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

/* Get user with id*/
router.get('/:id', function (req, res) {
  const id = 'id123456';
  const user = getUser(id);
  res.send({ user });
});

export default router;
