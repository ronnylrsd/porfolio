import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message: string
    senderEmail: string
}

export default function ContactFormEmail({
    message,
    senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
        <Preview>Nova mensagem do site do portfolio</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white border-black my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>Você recebeu a seguinte mensagem do formulário de contato</Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>O remetente do e-mail é: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
