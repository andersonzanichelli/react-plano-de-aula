import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a header', () => {
    expect(component.find('.nav')).to.exist;
  });

  it('shows a header with a home link', () => {
    expect(component.find('.navbar-brand')).to.exist;
  });

  it('shows a home link with text', () => {
    expect(component.find('.navbar-brand')).to.contain("Plano de Aula");
  });
});
