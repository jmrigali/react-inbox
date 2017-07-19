import React from 'react';

export default class Toolbar extends React.Component{
  constructor (props) {
    super(props)
    this.toolbarCheckBoxSelect = this.toolbarCheckBoxSelect.bind(this);
  }
  toolbarCheckBoxSelect() {
    let counter = 0;
    let result = "";
    this.props.messages.forEach(e => {
      if(e.selected) {
        counter++
      }
    })
    if(counter === 0) {
      result = "fa fa-square-o";
    } else if (counter > 0 && counter < this.props.messages.length) {
      result= "fa fa-minus-square-o";
    } else if (counter === this.props.messages.length){
      result= "fa fa-check-square-o";
    }
    return result;
  }
  render () {
    return (
      <div className="ros toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <button className="btn btn-default">
          <i className={this.toolbarCheckBoxSelect()} onClick= {()=>{this.props.checkbox(this.props.messages)}}></i>
        </button>

        <button className="btn btn-default " onClick= {()=>{this.props.markAsRead(this.props.messages)}}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick= {()=>{this.props.markAsUnread(this.props.messages)}}>
          Mark As Unread
        </button>

        <select className="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
  }
}
