export const medios_de_pago = [
    {
        name: "BCP",
        url: "imgs/bank/BCP.png"
    },
    {
        name: "YAPE",
        url: "imgs/bank/YAPE.png"
    },
    {
        name: "BBVA",
        url: "imgs/bank/BBVA.png"
    },
]

interface Bank_details {
    image: string;
    description: string
}


export const BBVA_details: Bank_details[] = [
    {
        image: "imgs/pages/payment-method/BBVA/phone_bbva_step_1.png",
        description: "Debemos entrar a la app, ir a transferencias"
    },
    {
        image: "imgs/pages/payment-method/BBVA/phone_bbva_step_2.png",
        description: "Colocamos el número de cuenta de GIGAMAS y le damos buscar."
    },
    {
        image: "imgs/pages/payment-method/BBVA/phone_bbva_step_3.png",
        description: "Colocamos el monto correspondiente para el deposito y le damos continuar, al realizar el deposito tomamos una captura de pantalla."
    },
    {
        image: "imgs/pages/payment-method/BBVA/phone_bbva_step_4.png",
        description: "Enviar la captura de pantalla mediante WhatsApp al número de GIGAMAS, indicando que se realizo el depósito"
    },

]
export const YAPE_details: Bank_details[] = [
    {
        image: "imgs/pages/payment-method/YAPE/phone_yape_step_1.png",
        description: "Debemos entrar a la app, al darle “Yapear”, debemos colocar el número de GIGAMAS."
    },
    {
        image: "imgs/pages/payment-method/YAPE/phone_yape_step_2.png",
        description: "Colocamos el monto a pagar de nuestro servicio."
    },
    {
        image: "imgs/pages/payment-method/YAPE/phone_yape_step_3.png",
        description: "Yapear el monto correspondiente y tomarle una captura de pantalla."
    },
    {
        image: "imgs/pages/payment-method/YAPE/phone_yape_step_4.png",
        description: "Enviar la captura de pantalla mediante WhatsApp al número de GIGAMAS, indicando que se realizo el depósito"
    },

]
export const BCP_details: Bank_details[] = [
    {
        image: "imgs/pages/payment-method/BCP/phone_bcp_step_1.png",
        description: "Debemos entrar a la app, ir a “Operaciones” ahi presionamos transferir dinero."
    },
    {
        image: "imgs/pages/payment-method/BCP/phone_bcp_step_2.png",
        description: "Colocamos el número de cuenta de GIGAMAS y le damos continuar."
    },
    {
        image: "imgs/pages/payment-method/BCP/phone_bcp_step_3.png",
        description: "Colocamos el monto correspondiente para el deposito y le damos continuar, al realizar el deposito tomamos una captura de pantalla."
    },
    {
        image: "imgs/pages/payment-method/BCP/phone_bcp_step_4.png",
        description: "Enviar la captura de pantalla mediante WhatsApp al número de GIGAMAS, indicando que se realizo el depósito"
    },

]


export interface Method_Pay {
    BBVA: Bank_details[],
    YAPE: Bank_details[],
    BCP: Bank_details[]
}

export const Method_pay: Method_Pay = {
    BBVA: BBVA_details,
    YAPE: YAPE_details,
    BCP: BCP_details
}


export const Terms_Pay = [
    {
        question: "¿Dónde puedo solicitar mi factura?",
        anwser: "Puedes solicitar tu factura llamando al número de nuestro centro de atención o enviando un mensaje por WhatsApp al mismo número. Estaremos encantados de ayudarte."
    },
    {
        question: "¿Dónde puedo realizar el pago de mi servicio?",
        anwser: "Puedes realizar el pago de tu servicio atraves de transferencia bancaria, deposito a cuenta, yape o plin a nuestros números de cuenta."
    }
]
