# Karigar — REST API Plan

Base URL: `http://localhost:5000/api`
Auth: JWT sent as `Authorization: Bearer <token>`.

Response convention:

```json
{ "success": true, "data": {} }
{ "success": false, "message": "..." }
```

Routers are already mounted. Handlers will be implemented phase by phase.

---

## Health

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/health` | Public | API status |

## Auth

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| POST | `/auth/register` | Public | Create account (user/artisan/collector) |
| POST | `/auth/login` | Public | Login and receive JWT |
| GET | `/auth/me` | Private | Current user |
| PATCH | `/auth/me` | Private | Update profile |

## Users

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/users/me/favorites` | Private | List saved products |
| POST | `/users/me/favorites/:productId` | Private | Add favorite |
| DELETE | `/users/me/favorites/:productId` | Private | Remove favorite |

## Artisans

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/artisans?craft=&city=&search=&page=` | Public | Search/filter artisans |
| GET | `/artisans/:id` | Public | Artisan profile, products, workshops |
| POST | `/artisans` | Private (artisan) | Create own profile |
| PATCH | `/artisans/:id` | Owner/Admin | Update profile |

## Crafts

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/crafts?category=&region=&search=` | Public | List/filter crafts |
| GET | `/crafts/:id` | Public | Craft history and cultural information |
| GET | `/crafts/:id/journey` | Public | Ordered making steps |

## Museums

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/museums?city=&search=` | Public | Museum map/list |
| GET | `/museums/:id` | Public | Museum details + historical crafts |

## Collectors

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/collectors` | Public | Verified collector list |
| GET | `/collectors/:id` | Public | Profile + collection |

## Products

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/products?craft=&artisan=&city=&minPrice=&maxPrice=&search=` | Public | Shop listing |
| GET | `/products/:id` | Public | Product details + artisan |
| POST | `/products/:id/inquiry` | Private | Ask a question / request purchase |

## Workshops

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/workshops?city=&craft=` | Public | Workshop listing |
| GET | `/workshops/:id` | Public | Workshop details |
| POST | `/workshops/:id/requests` | Private | Request participation |

## Orders

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| POST | `/orders` | Private | Checkout (COD or sandbox gateway) |
| GET | `/orders` | Private | Purchase history |
| GET | `/orders/:id` | Owner/Admin | Order details and status |

## Chat

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/chat/conversations` | Private | Conversation list |
| GET | `/chat/conversations/:id/messages` | Participant | Message history |
| POST | `/chat/conversations/:id/messages` | Participant | Send message (also via Socket.IO) |
| POST | `/chat/:id/report` | Participant | Report a conversation |

### Socket.IO events (planned)

| Event | Direction | Purpose |
| --- | --- | --- |
| `chat:join` | client → server | Join a conversation room |
| `chat:message` | client → server | Send message |
| `chat:received` | server → client | New message |
| `chat:typing` | both | Typing indicator |
| `notification:new` | server → client | Order/chat/workshop notification |

## Admin

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/admin/stats` | Admin | Dashboard counts |
| GET | `/admin/requests` | Admin | Verification/workshop requests |
| PATCH | `/admin/artisans/:id/verify` | Admin | Verified badge |
| PATCH | `/admin/collectors/:id/verify` | Admin | Verified badge |
| PATCH | `/admin/orders/:id/status` | Admin | Update order status |

Additional admin CRUD (users, museums, products, workshops) will follow the same
pattern as the public resources.

## AI Chatbot

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| POST | `/ai/chat` | Private (rate-limited) | Ask about crafts, artisans, museums and heritage |

The AI provider and API key are not selected yet; the route and client service
are placeholders for Phase 8.
