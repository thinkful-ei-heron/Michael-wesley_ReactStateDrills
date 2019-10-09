import React, { Component } from 'react'

//props: sections = [{title: str, content: str}, {title: str, content: str}, ...]

export class Accordion extends Component {

  state = {
    expandedSection: null
  }

  componentDidMount() {

  }

  /*for each non-expanded section:
<li class='section'>
  <button type='button' onClick={this.foo}>{sectionX.title}</button>
</li>

  for each expanded section
<li class='section'>
  <button type='button' onClick={this.foo}>{sectionX.title}</button>
  <p>{sectionX.content}</p>
</li>
  */

  closeSection() {
    this.setState({
      expandedSection: null
    })
  }

  openSection(idx) {
    this.setState({
      expandedSection: idx
    })
  }

  renderSection(section, idx){
    if(idx === this.state.expandedSection){
      return (
        <li className='section expanded' key={'section' + idx}>
          <button type='button' className='btn expanded' onClick={() => this.closeSection()}>{section.title}</button>
          <p>{section.content}</p>
        </li>
      )
    } else {
      return (
        <li className='section'  key={'section' + idx}>
          <button type='button' className='btn' onClick={() => this.openSection(idx)}>{section.title}</button>
        </li>
      )
    }
  }

  render() {
    if(this.props.sections === undefined) {
      return (
        <div>
          <ul>
            <li key="0"></li>
          </ul>
        </div>
      )
    }

    return (
      <div>
        <ul>
        {this.props.sections.map((section, idx) => this.renderSection(section, idx))}
        </ul>
      </div>
    )
  }
}

export default Accordion
