import ProductDetail from "@/components/ui/ProductDetail";

export default function Page({ params }: { params: { id: string } }) {
  return <ProductDetail params={params} />;
}