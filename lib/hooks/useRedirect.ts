import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export const useRedirect = () => {
       const session = useSession()
       const router = useRouter()

       useEffect(()=>{
             if(session.status === "authenticated"){
                router.push("/dashboard")
             }else{
                router.push("/")
             }
       },[session,router])
}