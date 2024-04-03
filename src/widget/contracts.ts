export interface EventMessageProp {
    success: boolean
}

export interface PaymentData {
    invoiceId?: string
    invoiceIdAlt?: string
    backLink?: string
    failureBackLink?: string
    postLink?: string
    failurePostLink?: string
    language?: string
    description?: string
    accountId?: string
    terminal?: string
    amount?: number
    name?: string
    currency?: string
    data?: string
}

export interface EpayPaymentWidgetProps {
    visible: boolean
    clientId: string
    clientSecret: string
    terminalId: string
    amount: number
    paymentData?: PaymentData
    invoiceId?: string
    currency?: string
    onWidgetClose?: (result: EventMessageProp) => void
    devMode?: boolean
}