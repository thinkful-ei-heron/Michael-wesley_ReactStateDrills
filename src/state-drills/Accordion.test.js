import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe('Accordion test', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Accordion/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders as expected when sections not supplied', ()=>{
    const wrapper = shallow(<Accordion/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders no sections active by default', () => {
    expect(renderer
      .create(<Accordion sections={sections} />)
      .toJSON())
      .toMatchSnapshot()
  })
  it('opens a section on click', () =>{
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('only opens the most recently clicked section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})
