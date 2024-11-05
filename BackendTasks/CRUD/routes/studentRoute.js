import express from "express"
import { fetch , create ,update,deleteStudent} from "../controller/studentController.js";

const route = express.Router();
route.post("/create",create);
route.get("/allStudents", fetch);//read
route.put("/update/:rollNo",update);
route.delete("/delete/:rollNo",deleteStudent)


export default route;