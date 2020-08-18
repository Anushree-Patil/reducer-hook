import {useEffect} from 'react'

function useDocumenTitle(count) {
    useEffect(() =>{
        document.title=`Count ${count}`
    },[count])
  
}

export default  useDocumenTitle