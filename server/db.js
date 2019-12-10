import mongoose from "mongoose";
import config from "./config/dev";

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false
});
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
