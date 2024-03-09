import admin from "firebase-admin"
import serviceAccount from "/serviceAccount.json"

const admin=admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;
