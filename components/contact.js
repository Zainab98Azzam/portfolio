import { useRef } from "react";


export default function contact() {
    let name = useRef(null)
    let email = useRef(null)
    let message = useRef(null)
    let subject = useRef(null)
    const send = async (ev) => {
        ev.preventDefault()
        const data = {
            name: name.current?.value,
            email: email.current?.value,
            message: message.current?.value,
            subject: subject.current?.value
        }
        try {
            const res = await fetch(
                `http://${process.env.domain}/api/mail/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            )
            const json = await res.json()
            window.confirm("we receive your email")

        }

        catch (error) {

        }
    }

    return (

        <section className="contact">
            <div className="container">
                <h3>contact me</h3>
                <form className="contact-form" onSubmit={send}>
                    <input type="text" name='name' placeholder="name" ref={name} />
                    <input type="email" name='email' placeholder="email" ref={email} />
                    <input type="text" name='subject' placeholder="subject" ref={subject} />
                    <textarea name="message" placeholder="message" ref={message}></textarea>
                    <button type="submit">send</button>
                </form>
            </div>
        </section>

    )
}