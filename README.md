# deen-log

A tiny logger for Node.js that writes logs into a `logs/node.log` file.  
Simple to use, no config, just plug and log.

---

## Install

```bash
npm install deen-log


const logger = require("deen-log");

logger.info("Server started", 3000);
logger.warn("Memory usage:", { used: "512MB", limit: "1GB" });
logger.error("User data:", [  { id: 1, name: "MrDeen" }, { id: 2, name: "Bro" } ]);

What It Does

1. Creates a logs folder automatically

2. Appends logs to logs/node.log

3. Formats objects and arrays neatly

4. Provides three methods:

    logger.info()

    logger.warn()

    logger.error()
