import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            &copy; {new Date().getFullYear()} Ronny Ribeiro. Todos os direitos reservados.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>Sobre esse website:</span> feito com React & Next.js (App Router & Server Action), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.
        </p>
    </footer>
  )
}
