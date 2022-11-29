import { initializeApp, cert } from "firebase-admin/app";

export function InitializeFirebase() {
  const serviceAccount: string = require("../keys/account.json");
  initializeApp({
    credential: cert(serviceAccount)
  });
}