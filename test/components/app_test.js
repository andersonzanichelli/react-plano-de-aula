import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders app', () => {
    expect(component).to.exist;
  });

  it('shows a header', () => {
    expect(component.find('.nav')).to.exist;
  });

  it('shows a header', () => {
    expect(component.find('.table')).to.exist;
  });

  it('shows a tool bar', () => {
    expect(component.find('.tools')).to.exist;
  });
});
