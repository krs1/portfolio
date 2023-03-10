import React from "react"
import "./header.scss"

export class HeaderComponent extends React.Component{
  render(){
    return (
      <header className="py-6">
         <div className="container mx-auto flex justify-between">
         <div className="text-lg font-bold">exsample.com</div>
         </div>
      </header>
    )
  }
}