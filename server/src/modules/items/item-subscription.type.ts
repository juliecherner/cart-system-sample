const subscriptionType = ['base', 'year'] as const;
type SubscriptionType = (typeof subscriptionType)[number];

export type SubcriptionOptions = {
	option: SubscriptionType,
	price: number
}