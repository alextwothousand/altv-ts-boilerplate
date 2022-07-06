import dotenv from "dotenv";
import alt from "alt-server";

// Load .env file.
// READ: https://github.com/motdotla/dotenv
dotenv.config();

// Events
import "./events/playerConnect";

// Done!
console.log("Server loaded successfully! Alt version: " + alt.version);