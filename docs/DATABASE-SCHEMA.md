# Karigar — Database Schema Plan

Database: **MongoDB** (Mongoose ODM)
Database name: `karigar`

These are the planned collections derived from the pitch deck. Schemas are not
implemented yet; model files exist in `server/src/models/`.

---

## User

| Field | Type | Notes |
| --- | --- | --- |
| name | String | required |
| email | String | unique, lowercase |
| password | String | hashed with bcryptjs, excluded from queries by default |
| role | String | `user`, `artisan`, `museum`, `collector`, `admin` |
| phone | String | optional |
| avatar | String | image URL/path |
| address | Object | line1, city, district, country |
| isVerified | Boolean | verified badge (artisan/collector/museum) |
| favorites | ObjectId[] | refs to Product |
| timestamps | Date | createdAt, updatedAt |

## Artisan

| Field | Type | Notes |
| --- | --- | --- |
| user | ObjectId | ref User (unique) |
| crafts | ObjectId[] | refs Craft |
| bio | String | short biography |
| story | String | personal/craft story |
| experienceYears | Number | |
| location | Object | address, city, coordinates `[lng, lat]` |
| profileImage / coverImage | String | |
| isVerified | Boolean | admin-controlled |
| timestamps | Date | |

## Craft

| Field | Type | Notes |
| --- | --- | --- |
| name / slug | String | unique slug |
| category | String | e.g. pottery, weaving, metalwork |
| region | String | origin region |
| history | String | historical background |
| culturalSignificance | String | |
| materials | String[] | |
| steps | Array | `{ order, title, description, image }` |
| images | String[] | |
| artisans | ObjectId[] | refs Artisan |
| museum | ObjectId | ref Museum (historical craft) |
| timestamps | Date | |

## Museum

| Field | Type | Notes |
| --- | --- | --- |
| name | String | |
| description | String | |
| location | Object | address, city, coordinates `[lng, lat]` |
| images | String[] | |
| openingHours | String | |
| contact | Object | phone, email, website |
| historicalCrafts | ObjectId[] | refs Craft |
| isVerified | Boolean | |
| timestamps | Date | |

## Collector

| Field | Type | Notes |
| --- | --- | --- |
| user | ObjectId | ref User (unique) |
| bio | String | |
| location | Object | |
| profileImage | String | |
| collectionItems | Array | `{ name, craft, description, image, era }` |
| isVerified | Boolean | admin-controlled |
| timestamps | Date | |

## Product

| Field | Type | Notes |
| --- | --- | --- |
| artisan | ObjectId | ref Artisan |
| craft | ObjectId | ref Craft |
| name | String | |
| description | String | |
| price | Number | |
| currency | String | default from app settings |
| images | String[] | |
| materials | String[] | |
| dimensions | String | size |
| stock | Number | |
| isActive | Boolean | soft visibility toggle |
| timestamps | Date | |

## Workshop

| Field | Type | Notes |
| --- | --- | --- |
| artisan | ObjectId | ref Artisan |
| title / description | String | |
| location | Object | address, city, coordinates |
| schedule | Object | date, startTime, duration |
| capacity | Number | |
| price | Number | |
| images | String[] | |
| status | String | `open`, `full`, `closed`, `completed` |
| timestamps | Date | |

## WorkshopRequest

| Field | Type | Notes |
| --- | --- | --- |
| workshop | ObjectId | ref Workshop |
| user | ObjectId | ref User |
| message | String | |
| status | String | `pending`, `accepted`, `rejected` |
| timestamps | Date | |

## Order

| Field | Type | Notes |
| --- | --- | --- |
| user | ObjectId | ref User |
| items | Array | `{ product, name, price, quantity }` |
| subtotal / deliveryFee / total | Number | |
| deliveryInfo | Object | fullName, phone, address, city, notes |
| paymentMethod | String | `cod` or `gateway` |
| paymentStatus | String | `pending`, `paid`, `failed`, `refunded` |
| orderStatus | String | `pending`, `confirmed`, `processing`, `shipped`, `delivered`, `cancelled` |
| timestamps | Date | |

## Inquiry

| Field | Type | Notes |
| --- | --- | --- |
| user | ObjectId | ref User |
| product | ObjectId | ref Product |
| artisan | ObjectId | ref Artisan |
| type | String | `question` or `purchase` |
| message | String | |
| status | String | `open`, `answered`, `closed` |
| timestamps | Date | |

## Conversation

| Field | Type | Notes |
| --- | --- | --- |
| participants | ObjectId[] | refs User (customer + artisan) |
| product | ObjectId | optional context |
| artisan | ObjectId | ref Artisan |
| lastMessage | String | preview |
| lastMessageAt | Date | sorting |
| timestamps | Date | |

## Message

| Field | Type | Notes |
| --- | --- | --- |
| conversation | ObjectId | ref Conversation |
| sender | ObjectId | ref User |
| text | String | |
| attachments | String[] | uploaded reference photos |
| readBy | ObjectId[] | read receipts |
| createdAt | Date | |

## Notification

| Field | Type | Notes |
| --- | --- | --- |
| user | ObjectId | ref User |
| type | String | `chat`, `order`, `workshop`, `verification` |
| title / message | String | |
| link | String | frontend route |
| isRead | Boolean | |
| timestamps | Date | |

## Report

| Field | Type | Notes |
| --- | --- | --- |
| reporter | ObjectId | ref User |
| conversation | ObjectId | ref Conversation |
| message | ObjectId | optional ref Message |
| reason | String | |
| details | String | |
| status | String | `open`, `reviewed`, `actioned`, `dismissed` |
| timestamps | Date | |

---

## Relationships overview

```
User 1─1 Artisan ──* Craft
User 1─1 Collector
User 1─* Order ──* Product
User 1─* Conversation *─1 User
Conversation 1─* Message
Artisan 1─* Product
Artisan 1─* Workshop 1─* WorkshopRequest
Museum 1─* Craft (historical)
Craft 1─* Product
```

## Index suggestions

- `User.email` unique.
- `Craft.slug` unique.
- `Artisan.location.city`, `Craft.category`, `Product.craft`, `Product.artisan`.
- `Order.user + createdAt`.
- `Conversation.participants`, `Message.conversation + createdAt`.
- `Notification.user + isRead`.
