interface ProductDetails {
  id: string;
  userId: string;
  productName: string;
  customerName: string;
  manufacturerName: string;
  manufacturingDate: string;
  createdAt: string;
  description: string;
  termsAccepted: boolean;
}
interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface User {
  id: string;
}
