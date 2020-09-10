import express from "express";
// import bodyParser from 'body-parser';
import publicRoutes from "./public";

const router = express.Router();
// const jsonParser = bodyParser.json();

router.use("/", publicRoutes);

// router.delete('/jobs/:id', slackValidator.deleteJob, slackController.deleteJob);

// router.post(
//   '/jobs',
//   [
//     jsonParser,
//     slackValidator.addNewJob
//   ],
//   slackController.addNewJob
// );

export default router;
