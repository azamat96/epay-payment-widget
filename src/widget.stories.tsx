import EpayPaymentWidget from "./index";
import {useState} from "react";

export const WidgetStories = () => {
    const [show, setShow] = useState(false)
    const callBk = function(result: {success: boolean}){
        setShow(!show)
        if (result.success) {
            console.log("payment recieved");
        } else {
            console.log("payment discarded");
        }
    }
    return (
        <>
            <button onClick={() => setShow(!show)}>Hey!</button>
            <EpayPaymentWidget
                visible={show}
                terminalId='67e34d63-102f-4bd1-898e-370781d0074d'
                invoiceId='1712349187384'
                // oauthData={{
                //     "access_token": "44JW502ASC6TQ0RTBQ0372",
                //     "expires_in": "1200",
                //     "refresh_token": "",
                //     "scope": "payment",
                //     "token_type": "Bearer"
                // }}
                clientSecret='yF587AV9Ms94qN2QShFzVR3vFnWkhjbAK3sG'
                clientId='test'
                amount={255}
                onWidgetClose={callBk}
                devMode />
        </>
    )
}