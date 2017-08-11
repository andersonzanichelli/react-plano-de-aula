import { renderComponent , expect } from '../test_helper';
import Tools from '../../src/components/tools';

describe('Tools' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Tools);
  });

  it('renders tool bar', () => {
    expect(component).to.exist;
  });

  it('shows a input', () => {
    expect(component.find('.search')).to.exist;
  });

  it('shows a input', () => {
    expect(component.find('.add')).to.exist;
  });
});
