import { Router } from "../../module/MyExpress/Router.js";

const router = new Router();

router.get("/v3", (req, res) => {
	res.end("v3");
});

export default router;