import React, { Component } from 'react';

class Head extends Component{
  constructor(props){
    super(props);
    this.parallaz = this.parallaz.bind(this);
}

componentDidMount(){
    document.addEventListener('scroll', this.parallaz);
}
componentWillUnmount(){
    document.removeEventListener('scroll', this.parallaz);
}
parallaz(event){
    let offset = window.pageYOffset;
    let title = document.getElementById("head");
    title.style.backgroundPositionY = offset * 0.5 + 'px';
}
render(){
    return (
      <div id="head" className="Head">
          <div className="container-fluid">
            <div className="row">
               <div id="titlehead" className="TitleHead">
                Ayush Saurav <br/>
                <h4>Software Engineer</h4>
               </div>
            </div>
          </div>
      </div>
    );
}
}

export default Head;