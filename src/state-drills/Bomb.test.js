import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Bomb from './Bomb';



describe('Bomb test', () => {
  it('renders without crashing', () => {
    const result = document.createElement('div');
    ReactDOM.render(<Bomb/>, result);
    ReactDOM.unmountComponentAtNode(result);
  })
  it('renders as expected', ()=>{
    expect(renderer.create(<Bomb />)
    .toJSON())
    .toMatchSnapshot()
  })

})
