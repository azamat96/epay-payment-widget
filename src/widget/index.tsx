import React, {useEffect} from "react";
import {postData, createPaymentObject, includeJS} from "./utils";
import {apiDevURL, apiProdURL, oauthDevURl, oauthGrantType, oauthProdURl, scope} from "./constants";
import {EpayPaymentWidgetProps} from "./contracts";

declare var halyk: any

const EpayPaymentWidget = (
    {
        visible,
        clientId,
        clientSecret,
        invoiceId = '' + new Date().valueOf(),
        amount,
        currency = 'KZT',
        paymentData = {},
        terminalId,
        onWidgetClose,
        devMode = false,
        oauthData
    }: EpayPaymentWidgetProps) => {

    useEffect(() => {
        if (typeof halyk == 'undefined') {
            includeJS(devMode ? apiDevURL : apiProdURL)
        }
    }, []);

    if (!visible) {
        return null
    }

    currency = paymentData?.currency ?? currency
    const invoice = (paymentData?.invoiceId || invoiceId) ?? '' + new Date().valueOf()
    amount = paymentData?.amount ?? amount
    terminalId = paymentData?.terminal ?? terminalId
    const showPaymentWidget = (dataAuth: any) => {
        halyk.showPaymentWidget(
            createPaymentObject(dataAuth, invoice, amount, terminalId, currency, paymentData),
            onWidgetClose ?? function () {}
        );
    }

    if (clientId && clientSecret) {
        const oauthParams = {
            grant_type: oauthGrantType,
            scope: scope,
            client_id: clientId,
            client_secret: clientSecret,
            invoiceID: invoiceId,
            amount: amount,
            currency: currency,
            terminal: terminalId
        }
        postData(devMode ? oauthDevURl : oauthProdURl, oauthParams).then(
            (dataAuth: any) => showPaymentWidget(dataAuth),
            () => alert("Authorization request failed")
        );
    } else {
        showPaymentWidget(oauthData)
    }

    return (<></>)
}

export default EpayPaymentWidget