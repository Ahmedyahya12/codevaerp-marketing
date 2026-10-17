
import {
  ShoppingCart, Boxes, Wallet, BookOpen,
  ChartNoAxesCombined, Truck, Users, Store,
} from "lucide-react";

export const whatsappUrl =
  "https://wa.me/22237559840?text=" +
  encodeURIComponent(
    "السلام عليكم، أريد معرفة المزيد عن CodevaERP وطلب عرض توضيحي."
  );

export const features = [
  {
    title: "المبيعات ونقطة البيع",
    description: "سجّل عمليات البيع وأصدر الفواتير وتابع الصندوق بسهولة.",
    icon: ShoppingCart,
    color: "orange",
  },
  {
    title: "إدارة المخزون",
    description: "اعرف الكميات المتوفرة وتابع حركة البضاعة بين المخازن.",
    icon: Boxes,
    color: "blue",
  },
  {
    title: "الدفتر الذكي للديون",
    description: "تابع ديون الزبائن والدفعات ووعود السداد والتأخير.",
    icon: BookOpen,
    color: "orange",
  },
  {
    title: "المحاسبة المبسطة",
    description: "راجع الإيرادات والمصاريف والحركات المالية.",
    icon: Wallet,
    color: "green",
  },
  {
    title: "التقارير ولوحة التحكم",
    description: "احصل على رؤية واضحة لنشاطك التجاري.",
    icon: ChartNoAxesCombined,
    color: "blue",
  },
  {
    title: "المشتريات والموردون",
    description: "نظّم المشتريات وتابع الموردين والمبالغ المستحقة.",
    icon: Truck,
    color: "orange",
  },
  {
    title: "إدارة الموظفين",
    description: "خصص الحسابات والصلاحيات لكل موظف.",
    icon: Users,
    color: "green",
  },
  {
    title: "المتجر الإلكتروني",
    description: "اربط طلبات متجرك الإلكتروني بعملياتك التجارية.",
    icon: Store,
    color: "blue",
  },
];

export const faqs = [
  {
    q: "هل يناسب CodevaERP المحلات الصغيرة؟",
    a: "نعم، صُمم ليناسب المحلات والمؤسسات الصغيرة والمتوسطة.",
  },
  {
    q: "هل يمكنني متابعة ديون الزبائن؟",
    a: "نعم، يمكنك متابعة الرصيد والدفعات الجزئية ووعود الدفع والتأخير.",
  },
  {
    q: "هل يمكن إدارة أكثر من مخزن؟",
    a: "نعم، يدعم النظام إدارة المخازن ومتابعة تحويل البضاعة بينها.",
  },
  {
    q: "كيف أحصل على عرض توضيحي؟",
    a: "يمكنك التواصل مع فريق Codeva Solution عبر واتساب لطلب عرض للنظام.",
  },
];
