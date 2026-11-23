import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import artisanRoutes from "./artisan.routes.js";
import craftRoutes from "./craft.routes.js";
import museumRoutes from "./museum.routes.js";
import collectorRoutes from "./collector.routes.js";
import productRoutes from "./product.routes.js";
import workshopRoutes from "./workshop.routes.js";
import orderRoutes from "./order.routes.js";
import chatRoutes from "./chat.routes.js";
import aiRoutes from "./ai.routes.js";
import adminRoutes from "./admin.routes.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({
    success: true,
    app: "Karigar API",
    timestamp: new Date().toISOString(),
  });
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/artisans", artisanRoutes);
router.use("/crafts", craftRoutes);
router.use("/museums", museumRoutes);
router.use("/collectors", collectorRoutes);
router.use("/products", productRoutes);
router.use("/workshops", workshopRoutes);
router.use("/orders", orderRoutes);
router.use("/chat", chatRoutes);
router.use("/ai", aiRoutes);
router.use("/admin", adminRoutes);

export default router;
