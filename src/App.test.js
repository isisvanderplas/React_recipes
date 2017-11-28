import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Title from './components/Title'
import ReactDOM from 'react-dom';
import RecipesContainer from './recipes/RecipesContainer'

chai.use(chaiEnzyme())



describe('<App />', () => {
  const app = shallow(<App />)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('contains the RecipesContainer', () => {
    expect(app).to.have.descendants(RecipesContainer)
  })


})
