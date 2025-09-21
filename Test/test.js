const logger = require('../index');

logger.info("Hi MrDeenBro");
logger.error("Hi MrDeenBro");
logger.warn("Hi MrDeenBro");

logger.info("Server started", 3000);
logger.warn("Memory usage:", { used: "512MB", limit: "1GB" });
logger.error("User data:", [{ id: 1, name: "MrDeen" }, { id: 2, name: "Bro" }]);