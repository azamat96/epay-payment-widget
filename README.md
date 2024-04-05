
![Epay Widget](https://epayment.kz/images/epay.png) 

# EpayPaymentWidget
![react version](https://img.shields.io/badge/react-version_16.8-blue) ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm size](https://img.shields.io/bundlephobia/min/epay-payment-widget/1.0)

React Component of [Epay](https://epayment.kz/) Payment Widget

## Documentation

Official documentation is on [Epay halyk](https://epayment.kz/docs). This is a wrapper component for [react](https://github.com/facebook/react).

## Installation

```shell
npm i epay-payment-widget
```

## Example

```typescript jsx
import {EpayPaymentWidget} from 'epay-payment-widget';
...
const [showWidget, setShowWidget] = useState(false);
...
<EpayPaymentWidget
    visible={showWidget}
    clientId='CLIENT_ID'
    clientSecret='CLIENT_SECRET'
    // oauthData={{}}
    terminalId='TERMINAL_ID'
    amount={500}
    paymentData={data}
    invoiceId={invoiceId}
    onWidgetClose={() => {}}
    devMode />
```

### Props

| Property        | Description                                                                                                                                                   | Type     | Required                                                                          | Default                            |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------|------------------------------------|
| `visible`       | Open/close widget                                                                                                                                             | boolean  | yes                                                                               | false                              |
| `clientId`      | Your client id from epay                                                                                                                                      | string   | yes, if `oauthData` is not specified. No, if `oauthData` is specified             |                                    |
| `clientSecret`  | Your client secret from epay                                                                                                                                  | string   | yes, if `oauthData` is not specified. No, if `oauthData` is specified             |                                    |
| `terminalId`    | Your terminal id from epay, which terminal you want to use                                                                                                    | string   | yes                                                                               |                                    |
| `amount`        | amount of money, cost                                                                                                                                         | number   | yes                                                                               |                                    |
| `invoiceId`     | Your invoice id                                                                                                                                               | string   | no                                                                                | `'' + new Date().valueOf()`        |
| `onWidgetClose` | callback, which calls when widget closes. Accepts as a parameter object `{success: boolean}`.  Weather of `success` based on the results of payment processing | function | no                                                                                | `function ({success: boolean}) {}` |
| `devMode`       | There is two modes: dev and prod. If you use `devMode` you will work in a development environtment                                                            | boolean  | no                                                                                | false                              |
| `paymentData`   | List of payment parameters from [official documentation](https://epayment.kz/docs/platezhnyi-vidzhet)                                                         | object   | no, if you specify this object it will be priority                                | `{}`                               |
| `oauthData`     | Oauth object for payment processing from epay                                                                                                                 | object   | yes, if `clientId` and `clientSecret` is not specified. No, if they are specified |                                    |

*If you need to get oauth object from backend, you can get that object from backend and pass it to the `oauthData` prop*

### paymentData

If you specify the properties of this object, it will be priority than above props

| Property        | Description (in russian)                                                                                                                                                                                                                | Type   | Required | Default |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|---|---------|
| invoiceId       | 	Номер заказа, генерируется коммерсантом, должен быть уникальный для каждого нового заказа,от 6 до 15 цифр. Если ваш номер заказа содержит более 6 символов, то дополнительно уникальность должна соблюдаться по последним 6ти символам | string | no |         |
| invoiceIdAlt    | 	альтернативный номер заказа, генерируется коммерсантом, должен быть уникальный для каждого нового заказа,от 6 до 15 цифр.                                                                                                              | string | no |         |
| backLink        | 	Ссылка для возврата в магазин при удачном платеже                                                                                                                                                                                      | string | no | |
| failureBackLink | 	Ссылка для возврата в магазин при не удачном платеже                                                                                                                                                                                   | string | no | |
| postLink        | 	Уведомление о платеже                                                                                                                                                                                                                  | string | no | |
| failurePostLink | 	Уведомление о неудачном платеже, если не заполнено, то информация будет отправленна на адрес указанный в postLink                                                                                                                      | string | no | |
| language        | 	Язык `rus`/`kaz`/`eng`                                                                                                                                                                                                                 | string | no | `rus` |
| description     | 	Описание заказа, допустимое количество символов 125 байтов                                                                                                                                                                             | string | no | |
| accountId       | 	Не обязательное поле для указание идентификатора клиента магазина                                                                                                                                                                      | string | no | |
| terminal        | 	Идентификатор магазина                                                                                                                                                                                                                 | string | no | |
| amount          | 	Сумма заказа                                                                                                                                                                                                                           | number | no | |
| name            | 	имя плательщика, только на латинице (не обязательно)                                                                                                                                                                                   | string | no | |
| currency        | 	Валюта                                                                                                                                                                                                                                 | string | no | `KZT` |
| data            | 	дополнительное поле транслируется в отчете при заполнении (необязательно)                                                                                                                                                              | string | no | |

## License

[MIT](./LICENSE)