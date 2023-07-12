// to handle reuests related to user/s
import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser
} from "../../../libs/usersFuncHandler";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          // Get a single user if id is provided is the query
          //http://localhost:3000/api/users?id=64a95a8d5efe31c392445f33

          const user = await getUser(req.query.id);
          return res.status(200).json(user);
        } else {
          // Otherwise, fetch all users
          const users = await getAllUsers();
          return res.json(users);
        }
      }
      case "POST": {
        // Create a new user
        const { email, name, image } = req.body;
        const user = await createUser(email, name, image);
        return res.json(user);
      }
      case "PUT": {
        // Update an existing user
        const { id, ...updateData } = req.body;
        const user = await updateUser(id, updateData);
        return res.json(user);
      }
      case "DELETE": {
        // Delete an existing user
        const  id  = req.query.id;
        const user = await deleteUser(id);
        return res.json(user); 
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
