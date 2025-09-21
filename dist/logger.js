const fs = require("fs");
const path = require("path");

// Put "logs" folder inside the project root
const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logFilePath = path.join(logDir, "node.log");

// timestamp
function timestamp() {
  return new Date().toISOString();
}

// Convert whatever comes into a string
function stringifyArgs(args) {
  return args
    .map((arg) => {
      if (typeof arg === "object") {
        try {
          return JSON.stringify(arg, null, 2);
        } catch (e) {
          return "[Unserializable Object]";
        }
      }
      return String(arg);
    })
    .join(" ");
}

// log writer
function log(level, ...args) {
  const line = `[${timestamp()}] [${level}] ${stringifyArgs(args)}\n`;
  fs.appendFileSync(logFilePath, line, "utf8");
}

// logger 
const logger = {
  info: (...args) => log("INFO", ...args),
  warn: (...args) => log("WARN", ...args),
  error: (...args) => log("ERROR", ...args),
};

module.exports = logger;
