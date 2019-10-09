import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RouletteGun from './RouletteGun';



describe('Roulette test', () => {
  it('renders without crashing', () => {
    const result = document.createElement('div');
    ReactDOM.render(<RouletteGun/>, result);
    ReactDOM.unmountComponentAtNode(result);
  })
  it('renders as expected', ()=>{
    expect(renderer.create(<RouletteGun />)
    .toJSON())
    .toMatchSnapshot()
  })

})
