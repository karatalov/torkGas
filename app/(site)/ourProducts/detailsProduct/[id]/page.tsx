import ProductDetail from '@/components/ui/ProductDetail'

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const resolvedParams = await params

	return <ProductDetail params={resolvedParams} />
}
