import React,{useState} from 'react'
import useDocumenTitle from '../hooks/useDocumentTitle'

function DocTitle2() {
    const [count,setCount] =useState(0)


    useDocumenTitle(count)
  return <div>
      <button onClick={() =>setCount(count+1)}>Count-{count}</button>
  </div>
}

export default DocTitle2