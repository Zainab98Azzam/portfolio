import nc from 'next-connect'
import cors from "cors"
import mailgun from "mailgun-js"

const mail = mailgun({

    apiKey: process.env.mailKey,
    domain: process.env.mailDomain,

})
const handler = nc().use().post(async (req, res) => {
    const data = {
        from: `${req.body.name}<${process.env.mailFrom}>`,
        to: process.env.mailTo,
        subject: req.body.subject,
        text: req.body.text,
        "h:reply-to": req.body.email
    };
    mail.messages()
        .send(data, (error, body
        ) => {
            res.json(body)
        })
})
export default handler