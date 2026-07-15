# Food Delivery WebApp — Layout Plan

## 1. App Overview
A food delivery web app (Swiggy/Zomato-style) built with React. Users can browse restaurants, search/filter by cuisine or rating, view a restaurant's menu, add items to a cart, and check out.

---

## 2. Page Layout (Wireframe)

### 2.1 Home Page
```
┌──────────────────────────────────────────────────────────────┐
│  HEADER                                                       │
│  [Logo]        Home  Cuisines  About  Contact      [Cart 🛒]  │
├──────────────────────────────────────────────────────────────┤
│  HERO / SEARCH BAR                                            │
│    "Order food from your favorite restaurants"                 │
│    [ 🔍 Search restaurants or dishes...........]  [Search]     │
├──────────────────────────────────────────────────────────────┤
│  FILTER BAR                                                    │
│  [Top Rated ⭐4+]  [Fast Delivery]  [Pure Veg]  [Offers]        │
├──────────────────────────────────────────────────────────────┤
│  RESTAURANT LIST (grid of cards)                               │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐    │
│  │ [image]   │  │ [image]   │  │ [image]   │  │ [image]   │    │
│  │ Name      │  │ Name      │  │ Name      │  │ Name      │    │
│  │ ⭐4.2 •25m │  │ ⭐4.5 •30m │  │ ⭐4.0 •20m │  │ ⭐4.6 •35m │    │
│  │ Cuisine   │  │ Cuisine   │  │ Cuisine   │  │ Cuisine   │    │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘    │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐    │
│  │   ...     │  │   ...     │  │   ...     │  │   ...     │    │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘    │
├──────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
│  Links | Social Icons | Copyright                              │
└──────────────────────────────────────────────────────────────┘
```

### 2.2 Restaurant Menu Page (on card click)
```
┌──────────────────────────────────────────────────────────────┐
│  HEADER (same as home)                                        │
├──────────────────────────────────────────────────────────────┤
│  RESTAURANT INFO BANNER                                        │
│  [cover image]                                                 │
│  Restaurant Name       ⭐ 4.3 (2k+ ratings)                     │
│  Cuisine tags • 30-35 mins • ₹200 for two                       │
├──────────────────────────────────────────────────────────────┤
│  MENU (category accordions)                                    │
│  ▼ Recommended (4)                                              │
│     ┌──────────────────────────────┐                           │
│     │ Item name        ₹250  [Add] │                           │
│     │ description...                │                           │
│     └──────────────────────────────┘                           │
│  ▶ Starters (8)                                                │
│  ▶ Main Course (12)                                             │
│  ▶ Desserts (5)                                                │
├──────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└──────────────────────────────────────────────────────────────┘
```

### 2.3 Cart Page
```
┌──────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
├──────────────────────────────────────────────────────────────┤
│  YOUR CART                                                     │
│  Item x qty ................ price   [+/-] [remove]            │
│  Item x qty ................ price   [+/-] [remove]            │
│  ------------------------------------------------              │
│  Subtotal / Delivery Fee / Total                                │
│  [ Proceed to Checkout ]                                        │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Component Hierarchy

```
<App>
 ├─ <Header>
 │   ├─ <Logo>
 │   ├─ <NavItems>  (Home, Cuisines, About, Contact)
 │   └─ <CartIcon>  (shows item count)
 │
 ├─ <Body>                      (Home route)
 │   ├─ <SearchBar>
 │   ├─ <FilterBar>
 │   │   └─ <FilterButton> (Top Rated, Fast Delivery, Pure Veg...)
 │   └─ <RestaurantList>
 │       └─ <RestaurantCard>  (repeated, controlled via props)
 │           ├─ image, name, rating, cuisine, time
 │
 ├─ <RestaurantMenu>            (RestaurantMenu route, /restaurant/:id)
 │   ├─ <RestaurantInfoBanner>
 │   └─ <MenuAccordion>
 │       └─ <MenuCategory>
 │           └─ <MenuItem>  (+ Add to Cart button)
 │
 ├─ <Cart>                      (Cart route, /cart)
 │   ├─ <CartItem>  (repeated)
 │   └─ <CartSummary>
 │
 ├─ <About>
 ├─ <Contact>
 ├─ <Error>                     (404 fallback)
 └─ <Footer>
     ├─ <FooterLinks>
     └─ <SocialIcons>
```

---

## 4. Suggested Folder Structure

```
src/
 ├─ components/
 │   ├─ Header.js
 │   ├─ Body.js
 │   ├─ SearchBar.js
 │   ├─ FilterBar.js
 │   ├─ RestaurantCard.js
 │   ├─ RestaurantMenu.js
 │   ├─ MenuItem.js
 │   ├─ Cart.js
 │   ├─ CartItem.js
 │   ├─ About.js
 │   ├─ Contact.js
 │   ├─ Footer.js
 │   └─ Error.js
 ├─ utils/
 │   ├─ constants.js        (API URLs, default images, etc.)
 │   ├─ CartContext.js      (React Context for cart state)
 │   └─ mockData.js         (sample restaurant/menu data before API integration)
 ├─ App.js                  (routes + top-level layout)
 └─ index.js                (ReactDOM root render)
```

---

## 5. State & Data Notes
- **Restaurant list / menu data**: start with a static mock JSON (`mockData.js`), later swap for a real API (e.g. Swiggy public API or your own backend).
- **Search**: filter `RestaurantList` by name using local state (`useState`).
- **Cart**: global state via React Context (`CartContext`) so `Header`, `RestaurantMenu`, and `Cart` can all read/update it without prop drilling.
- **Routing**: use `react-router-dom` for `/`, `/restaurant/:id`, `/cart`, `/about`, `/contact`, and a catch-all `*` → `<Error>`.

---

## 6. Next Steps
1. Confirm this layout / adjust anything you'd like changed.
2. Set up `react-router-dom` and folder structure above.
3. Build static components with mock data (Header → Body → RestaurantCard grid).
4. Add Search + Filter logic.
5. Build RestaurantMenu page with mock menu data.
6. Add Cart via Context API.
7. (Later) Replace mock data with a real API.
