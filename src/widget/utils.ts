import {PaymentData} from "./contracts";

export async function postData(url: string, data: any) {
    const formData  = new FormData();
    for(const name in data) {
        formData.set(name, data[name]);
    }

    const response = await fetch(url, {
        method: "POST",
        body: formData,
    } as any);
    return response.json();
}

export function createPaymentObject(
    auth: any,
    invoiceId: string,
    amount: number,
    terminalId: string,
    currency: string = 'KZT',
    data: PaymentData = {}
) {
    const dummyObject = {
        backLink: "https://example.kz/success.html",
        failureBackLink: "https://example.kz/failure.html",
        postLink: "https://example.kz/",
        failurePostLink: "https://example.kz/order/1123/fail",
        language: "rus",
        description: "Оплата в интернет магазине",
        accountId: "testuser1",
        name: "Arman Ali",
        data: "{\"statement\":{\"name\":\"Arman     Ali\",\"invoiceID\":\"80000016\"}}"
    };
    return {
        ...dummyObject,
        ...data,
        auth,
        invoiceId,
        invoiceIdAlt: invoiceId,
        amount,
        terminal: terminalId,
        currency
    }
}

export function includeJS( jsPath: string ) {
    const js = document.createElement("script");
    js.setAttribute("type", "text/javascript");
    js.setAttribute("src", jsPath);
    document.getElementsByTagName("body")[0].appendChild(js);
}