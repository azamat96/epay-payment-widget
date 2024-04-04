import React from 'react';

interface EventMessageProp {
    success: boolean;
}
interface PaymentData {
    invoiceId?: string;
    invoiceIdAlt?: string;
    backLink?: string;
    failureBackLink?: string;
    postLink?: string;
    failurePostLink?: string;
    language?: string;
    description?: string;
    accountId?: string;
    terminal?: string;
    amount?: number;
    name?: string;
    currency?: string;
    data?: string;
}
interface EpayPaymentWidgetProps {
    visible: boolean;
    clientId: string;
    clientSecret: string;
    terminalId: string;
    amount: number;
    paymentData?: PaymentData;
    invoiceId?: string;
    currency?: string;
    onWidgetClose?: (result: EventMessageProp) => void;
    devMode?: boolean;
}

declare const EpayPaymentWidget: ({ visible, clientId, clientSecret, invoiceId, amount, currency, paymentData, terminalId, onWidgetClose, devMode }: EpayPaymentWidgetProps) => React.JSX.Element | null;

export { EpayPaymentWidget };
