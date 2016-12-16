// Want an easy way to make your images a little more graceful?
// This recipe is for an Image component that fades in once the image is loaded.
// Getting images to fade becomes a matter of replacing <img> with <Image>.
// source: http://buildwithreact.com/article/fade-in-image-recipe


var classNames = require('classnames');

var Image = React.createClass({
  getInitialState: function() {
    return {
      loaded: false
    };
  },

  onImageLoad: function() {
    if (this.isMounted()) {
      this.setState({ loaded: true });
    }
  },

  componentDidMount: function() {
    var imgTag = ReactDOM.findDOMNode(this.refs.img);
    var imgSrc = imgTag.getAttribute('src');
    // You may want to rename the component if the <Image> definition
    // overrides window.Image
    var img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  },

  render: function() {
    var { className, ...props } = this.props;
    var imgClasses = 'image';
    var rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded,
    });
    return (
      <img ref="img" {...props} className={rootClassName} />
    );
  }
});

ReactDOM.render(
  <Image src="path/to/image" />,
  node
);
