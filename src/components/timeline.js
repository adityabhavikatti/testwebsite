import React, { Component } from 'react';
import ScrollTop from 'react-scrolltop-button';

export default class About extends Component {
  render() {
    return (
      <div className="about-page" id="timeline">
        <div className="container-fluid">
          <h1>Timeline</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit amet massa. Tincidunt vitae semper quis lectus nulla at volutpat diam. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Integer vitae justo eget magna fermentum iaculis eu non. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Eleifend quam adipiscing vitae proin sagittis nisl. Morbi tincidunt augue interdum velit euismod in. In hendrerit gravida rutrum quisque. Morbi tincidunt augue interdum velit euismod in pellentesque. Ut sem nulla pharetra diam sit. Dictumst vestibulum rhoncus est pellentesque elit. Praesent semper feugiat nibh sed pulvinar proin gravida. Mattis enim ut tellus elementum sagittis vitae et. Et leo duis ut diam quam nulla porttitor. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Sed adipiscing diam donec adipiscing tristique risus. Tempus iaculis urna id volutpat lacus laoreet non. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat.

Ut consequat semper viverra nam. Ac auctor augue mauris augue. Nunc mattis enim ut tellus elementum. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Elit eget gravida cum sociis natoque penatibus et magnis. Mauris commodo quis imperdiet massa tincidunt. Sed id semper risus in hendrerit gravida rutrum quisque non. Velit egestas dui id ornare arcu odio ut. Ut consequat semper viverra nam libero justo laoreet. Egestas erat imperdiet sed euismod nisi porta. Ut porttitor leo a diam sollicitudin. Bibendum ut tristique et egestas quis. Mauris sit amet massa vitae tortor condimentum. Aliquet enim tortor at auctor. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Fames ac turpis egestas maecenas pharetra.
            </p>
        </div>
        <ScrollTop
          text= {<i class="fa fa-chevron-up"></i>}
          distance={100}
          breakpoint={768}
          style={{ backgroundColor: "transparent", fontSize: "10px", position: "fixed", bottom: "0", right: "0"}}
          className="scroll-your-role"
          speed={550}
          target={0}
        />
      </div>
    )
  }
}
