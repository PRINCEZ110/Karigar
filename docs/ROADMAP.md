# Karigar — Development Roadmap

Phase 0 is complete: folders, base shell and dependencies.

## Phase 1 — Backend foundation

- [x] Express app, CORS, Helmet, rate limiting, error handler
- [x] Health endpoint and mounted routers
- [x] MongoDB connection helper
- [ ] Implement all 14 Mongoose models
- [ ] Seed script with sample artisans, crafts, museums, collectors
- [ ] Postman collection for the API

## Phase 2 — Authentication and roles

- [ ] Register/login with bcryptjs + JWT
- [ ] Auth middleware and role authorization
- [ ] Client AuthContext, protected routes and login/register UI
- [ ] Profile page and favorites

## Phase 3 — Discovery

- [ ] Artisan list, search, filters and profile
- [ ] Craft list, details and craft journey
- [ ] Museum list/details and historical crafts
- [ ] Collector list/profile
- [ ] Leaflet map with artisan, workshop and museum markers

## Phase 4 — Commerce

- [ ] Product listing and details
- [ ] Cart context and cart page
- [ ] Checkout with delivery info
- [ ] Cash on delivery + sandbox payment option
- [ ] Order creation, history and status tracking
- [ ] Product inquiries

## Phase 5 — Workshops

- [ ] Workshop listing and details
- [ ] Participation request flow
- [ ] Artisan workshop management

## Phase 6 — Communication

- [ ] Conversation and message models
- [ ] Socket.IO chat rooms, history and attachments
- [ ] Notifications
- [ ] Report chat + admin review

## Phase 7 — Admin panel

- [ ] Dashboard statistics
- [ ] Manage users/artisans/museums/products/workshops
- [ ] Verify artisans and collectors
- [ ] Update order/payment status

## Phase 8 — AI chatbot

- [ ] Choose an AI provider/API key
- [ ] Chatbot endpoint with craft/artisan/museum context
- [ ] Chatbot UI widget

## Phase 9 — Quality and delivery

- [ ] Input validation and consistent API errors
- [ ] Responsive polish and accessibility pass
- [ ] Seed/demo data for the defense
- [ ] Testing (API + key user flows)
- [ ] Final report, screenshots and deployment
