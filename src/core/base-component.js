export class BaseComponent {
    constructor(props = {}) {
        this.props = props;
        this.el = document.createElement("div");
    }

    render() {
        return this.el;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }

    unmount() {
        this.el.remove();
    }
}
