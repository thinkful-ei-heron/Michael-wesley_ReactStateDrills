import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';



describe('helloworld test', () => { 
  it('renders without crashing', () => {
    const result = document.createElement('div');
    ReactDOM.render(<HelloWorld/>, result);
    ReactDOM.unmountComponentAtNode(result);
  })
  it('renders as expected', ()=>{
    expect(renderer.create(<HelloWorld />)
    .toJSON())
    .toMatchSnapshot()
  })

})