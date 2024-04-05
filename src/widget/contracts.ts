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

interface CommonWidgetProps {
    visible: boolean
    terminalId: string
    amount: number
    paymentData?: PaymentData
    invoiceId?: string
    currency?: string
    onWidgetClose?: (result: EventMessageProp) => void
    devMode?: boolean
}

type ConditionalWidgetProps =
    | {
    clientId: string
    clientSecret: string
    oauthData?: never
} | {
    oauthData: any
    clientId?: never
    clientSecret?: never
}

export type EpayPaymentWidgetProps = CommonWidgetProps & ConditionalWidgetProps