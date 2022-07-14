// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import app from "./server";
import { intializeDB } from "./db";

intializeDB();

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log("Express server started on port: " + port);
});
