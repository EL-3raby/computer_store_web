import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { NotFound } from "./pages/NotFound";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { Dashboard } from "./pages/admin/Dashboard";
import { ProductsList } from "./pages/admin/ProductsList";
import { ComingSoon } from "./pages/admin/ComingSoon";

export const router = createBrowserRouter([
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "products", Component: ProductsList },
      { path: "orders", element: <ComingSoon title="إدارة الطلبات قريباً" description="سنقوم بتوفير نظام متكامل لإدارة طلبات العملاء ومتابعة الشحن وحالات الدفع قريباً." /> },
      { path: "users", element: <ComingSoon title="إدارة العملاء قريباً" description="سيتم إضافة قسم مخصص لإدارة حسابات العملاء والصلاحيات وبرامج الولاء." /> },
      { path: "settings", element: <ComingSoon title="إعدادات المتجر قريباً" description="ستتمكن من تخصيص إعدادات المتجر مثل طرق الدفع، الشحن، والضرائب من هنا." /> },
    ],
  },
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "category", Component: Products },
      { path: "category/:id", Component: Products },
      { path: "product/:id", Component: Products },
      { path: "offers", Component: Products },
      { path: "*", Component: NotFound }
    ],
  },
]);
