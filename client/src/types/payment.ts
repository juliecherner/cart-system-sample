export type PaymentInfo = {
	cardNumber: number | null;
	cardOwnerName: string;
	expires: string;
	cvv: number | null
}