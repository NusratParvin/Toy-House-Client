import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        document.title=`The Toy House - ${title}`
    },[title])
}

export default useTitle;