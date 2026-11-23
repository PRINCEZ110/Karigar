import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Artisans from "./pages/artisans/Artisans.jsx";
import ArtisanProfile from "./pages/artisans/ArtisanProfile.jsx";
import Crafts from "./pages/crafts/Crafts.jsx";
import CraftDetails from "./pages/crafts/CraftDetails.jsx";
import CraftJourney from "./pages/crafts/CraftJourney.jsx";
import Museums from "./pages/museums/Museums.jsx";
import MuseumDetails from "./pages/museums/MuseumDetails.jsx";
import Collectors from "./pages/collectors/Collectors.jsx";
import CollectorProfile from "./pages/collectors/CollectorProfile.jsx";
import Products from "./pages/products/Products.jsx";
import ProductDetails from "./pages/products/ProductDetails.jsx";
import Workshops from "./pages/workshops/Workshops.jsx";
import WorkshopDetails from "./pages/workshops/WorkshopDetails.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Checkout from "./pages/cart/Checkout.jsx";
import Orders from "./pages/orders/Orders.jsx";
import OrderDetails from "./pages/orders/OrderDetails.jsx";
import Chat from "./pages/chat/Chat.jsx";
import Profile from "./pages/account/Profile.jsx";
import Favorites from "./pages/account/Favorites.jsx";
import AdminDashboard from "./pages/admin/Dashboard.jsx";
import AdminUsers from "./pages/admin/Users.jsx";
import AdminArtisans from "./pages/admin/Artisans.jsx";
import AdminMuseums from "./pages/admin/Museums.jsx";
import AdminProducts from "./pages/admin/Products.jsx";
import AdminWorkshops from "./pages/admin/Workshops.jsx";
import AdminOrders from "./pages/admin/Orders.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="artisans" element={<Artisans />} />
          <Route path="artisans/:id" element={<ArtisanProfile />} />

          <Route path="crafts" element={<Crafts />} />
          <Route path="crafts/:id" element={<CraftDetails />} />
          <Route path="crafts/:id/journey" element={<CraftJourney />} />

          <Route path="museums" element={<Museums />} />
          <Route path="museums/:id" element={<MuseumDetails />} />

          <Route path="collectors" element={<Collectors />} />
          <Route path="collectors/:id" element={<CollectorProfile />} />

          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />

          <Route path="workshops" element={<Workshops />} />
          <Route path="workshops/:id" element={<WorkshopDetails />} />

          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />

          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetails />} />

          <Route path="chat" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="favorites" element={<Favorites />} />

          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/users" element={<AdminUsers />} />
          <Route path="admin/artisans" element={<AdminArtisans />} />
          <Route path="admin/museums" element={<AdminMuseums />} />
          <Route path="admin/products" element={<AdminProducts />} />
          <Route path="admin/workshops" element={<AdminWorkshops />} />
          <Route path="admin/orders" element={<AdminOrders />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
