import { renderComponent , expect } from '../test_helper';
import TableList from '../../src/components/tablelist';

describe('TableList' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TableList);
  });

  it('renders table', () => {
    expect(component).to.exist;
  });

  it('shows a table list row', () => {
    expect(component.find('.row')).to.exist;
  });

  it('shows a table list col', () => {
    expect(component.find('.col')).to.exist;
  });

  it('shows a col with text 1', () => {
    expect(component.find('.col')).to.contain("Atividade");
  });

  it('shows a col with text 2', () => {
    expect(component.find('.col')).to.contain("Data");
  });
});
