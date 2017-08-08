import { renderComponent , expect } from '../test_helper';
import Header from '../../src/components/header';

describe('Header' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
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

  it('shows a button to signin', () => {
    expect(component.find('.nav-link')).to.contain("Meus Planos");
  });

  it('shows a button to signin', () => {
    expect(component.find('.nav-link')).to.contain("Entrar");
  });
});
