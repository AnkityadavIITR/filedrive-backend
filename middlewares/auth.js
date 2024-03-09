import admin from "../config/firebaseadmin";
class Middleware {
  async decodeToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      console.log(decodedToken);

      if (decodedToken) {
        return next();
      }
      res.json({ message: "unauthorized" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new Middleware();
