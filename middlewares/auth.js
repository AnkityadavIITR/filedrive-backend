import admin from "../config/firebaseadmin.js";
import { User } from "../models/user.js";

class AuthMiddleware {
  async setQuery(req, decodedToken) {
    try {
      const user = await User.findOne({ email: decodedToken.email });
      if (user) {
        req.user = user;
      }
    } catch (e) {
      console.log(e);
      // Handle error appropriately
    }
  }

  decodeToken = async (req, res, next) => { 
    const authorizationHeader = req.headers.authorization;
    console.log(authorizationHeader);

    if (authorizationHeader) {
      const token = req.headers.authorization.split(" ")[1];
      try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log("decode", decodedToken);
        await this.setQuery(req, decodedToken);
        next();
      } catch (e) {
        console.error("error",e);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      return res.status(401).json({ error: 'Unauthorized: Missing Authorization header' });
    }
  }
}

export default new AuthMiddleware();
