"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.auth = exports.app = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _storage = require("firebase/storage");

var firebaseConfig = {
  apiKey: "AIzaSyBMInwR9W8WoU3ovEcNEtw-EeEV3r0PZv4",
  authDomain: "chat-40893.firebaseapp.com",
  projectId: "chat-40893",
  storageBucket: "chat-40893.appspot.com",
  messagingSenderId: "430052890071",
  appId: "1:430052890071:web:5ab9b42e27cda8baf1a792"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
exports.app = app;
var auth = (0, _auth.getAuth)();
exports.auth = auth;
var storage = (0, _storage.getStorage)();
exports.storage = storage;
//# sourceMappingURL=firebase.dev.js.map
