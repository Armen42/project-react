import React from 'react'
import ReactDOM from 'react-dom'   
import Header from './components/common/header'
import './index.css' 
import List from './components/list/list'

 const App = ()=>{
     return(
         <div>
             <Header/>
             <List/>
             <h1>React coin</h1>
             <p>hello</p>
         </div>
     )
 }

 ReactDOM.render(<App/>,document.getElementById('root'))
