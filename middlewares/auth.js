import admin from "../config/firebaseadmin.js";
import { User } from "../models/user.js";
class AuthMiddleware {
  async decodeToken(req, res, next) {
    console.log(req.headers);
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
      const token = req.headers.authorization.split(" ")[1];
      console.log(token);
      try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log("decode", decodedToken);

        if (decodedToken) {
          req.user=await User.find({email:decodedToken.email})
          return next();
        }
        res.json({ message: "unauthorized" });
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }else res.status(401).json({ error: 'Unauthorized: Missing Authorization header' });
  }
}

export default new AuthMiddleware();
