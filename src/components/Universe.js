export default class Universe {
  // Store all the children here
  children = [];

  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  // Add children
  appendChild(child) {
    child.root = this.props.name;
    this.children.push(child);
  }

  // Remove children
  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  renderChildren() {
    for (let i = 0; i < this.children.length; i += 1) {
      if (typeof this.children[i] === "string") {
        // If not a component, render it as a paragraph
        //this.adder.addText(this.children[i]);
      } else if (typeof this.children[i] === "object") {
        // We know it's a component so just call the render() method
        this.children[i].render();
      }
    }
  }

  render() {
    this.renderChildren();
  }
}