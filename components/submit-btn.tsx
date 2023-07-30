import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none hover:bg-gray-950 focus:scale-110 hover:scale-110
          active:scale-105 transition-all cursor-pointer disabled:scale-100 disabled:opacity-75"
          disabled={pending}
        >{
            pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> : (
                <>             
                Enviar{" "}
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all" />
                </>
            )
        }
        </button>
  )
}
