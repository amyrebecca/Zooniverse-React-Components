import DragAndDropTarget from '../src/components/drag-and-drop-target';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

describe('DragAndDropTarget', function() {
  it('renders DragAndDropTarget', function() {
    const wrapper = render(<DragAndDropTarget />);
    expect(wrapper).to.be.an.instanceof(DragAndDropTarget);
  });

  it('renders children', function() {
    const wrapper = render(<DragAndDropTarget><span></span></DragAndDropTarget>);
    expect(wrapper.find('span').exists()).to.be(true);
  });

  describe('onDragEnter event', function() {
    it('sets state to { canDrop: true } for onDragEnter event', function() {
      const wrapper = mount(<DragAndDropTarget />);
      wrapper.find('.file-drop-target').simulate('dragenter');
      expect(wrapper.state('canDrop')).to.equal(true);
    });

    it('calls this.props.onDragEnter', function() {
      const onDragEnter = sinon.spy();
      const wrapper = mount(<DragAndDropTarget onDragEnter={onDragEnter} />);
      wrapper.find('.file-drop-target').simulate('dragenter');
      expect(onDragEnter.calledOnce).to.equal(true);
    });
  });

  describe('onDragOver event', function() {
    it('calls this.props.onDragOver', function() {
      const onDragOver = sinon.spy();
      const wrapper = mount(<DragAndDropTarget onDragOver={onDragOver} />);
      wrapper.find('.file-drop-target').simulate('dragover');
      expect(onDragOver.calledOnce).to.equal(true);
    });
  });

  describe('onDragLeave', function() {
    it('calls this.props.onDragLeave', function() {
      const onDragLeave = sinon.spy();
      const wrapper = mount(<DragAndDropTarget onDragLeave={onDragLeave} />);
      wrapper.find('.file-drop-target').simulate('dragleave');
      expect(onDragLeave.calledOnce).to.equal(true);
    });
  });

  describe('onDrop', function() {
    it('sets state to { canDrop: false } for onDrop event', function() {
      const wrapper = mount(<DragAndDropTarget />);
      wrapper.find('.file-drop-target').simulate('drop');
      expect(wrapper.state('canDrop')).to.equal(false);
    });

    it('calls this.props.onDrop', function() {
      const onDrop = sinon.spy();
      const wrapper = mount(<DragAndDropTarget onDrop={onDrop} />);
      wrapper.find('.file-drop-target').simulate('drop');
      expect(onDrop.calledOnce).to.equal(true);
    });
  });
});
