import errorHandler from "errorhandler";

import app from "./app";

if (process.env.NODE_ENV === "development") {
  // only use in development
  app.use(errorHandler());
}
/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    " App is running at http://localhost:%d in %s mode",
    process.env.PORT,
    app.get("env")
  );
  console.log(" Press CTRL-C to stop\n");
});

export default server;
