import React, { Component, PureComponent } from "react";

const Dropdown = (props) => (
  <Toggleable defaultOpen={props.defaultOpen}>
    {({ open, toggle }) => (
      <>
        {props.closeOnEscape && <Escape onEscape={() => toggle(false)} />}

        <BaseMenu
          items={props.items}
          onItemClick={toggle}
          open={open}
          className={props.className}
          childClassName={props.childClassName}
          containerClassName={props.containerClassName}
        >
          {props.children({ toggle , open })}
        </BaseMenu>
      </>
    )}
  </Toggleable>
);

class Toggleable extends Component {
  state = {
    open: this.props.defaultOpen,
  };

  toggle = (open) => {
    this.setState((state) => ({
      open: typeof open === "boolean" ? open : !state.open,
    }));
  };

  render() {
    return this.props.children({
      open: this.state.open,
      toggle: this.toggle,
    });
  }
}

class EventListener extends PureComponent {
  componentDidMount() {
    if (typeof document !== "undefined") {
      document.addEventListener(this.props.event, this.props.handler);
    }
  }

  componentWillUnmount() {
    if (typeof document !== "undefined") {
      document.removeEventListener(this.props.event, this.props.handler);
    }
  }

  render() {
    return <noscript />;
  }
}

const ESCAPE_KEY = 27;

class Escape extends PureComponent {
  constructor(props) {
    super(props);

    this.handleEscape = this.handleEscape.bind(this);
  }

  handleEscape = (event) => {
    if (event.keyCode === ESCAPE_KEY) {
      this.props.onEscape();
    }
  };

  render() {
    return <EventListener event="keydown" handler={this.handleEscape} />;
  }
}

class ClickOutside extends PureComponent {
  containerRef = React.createRef();

  handleOutsideClick = (event) => {
    if (
      this.containerRef.current &&
      !this.containerRef.current.contains(event.target)
    ) {
      this.props.onClickOutside();
    }
  };

  render() {
    return (
      <>
        {this.props.closeOnOutsideClick && (
          <EventListener event="click" handler={this.handleOutsideClick} />
        )}

        {this.props.children({
          containerRef: this.containerRef,
        })}
      </>
    );
  }
}

const BaseMenu = (props) => (
  <div ref={props.containerRef} className={props.className}>
    {props.children}
    {(!props.children || props.open) && (
      <div className={props.containerClassName}>
        {props.items.map((item) => (
          <>
            <div key={item.title} className={props.childClassName}>
              <div>
                <h3 className="text-gray-400">{item.title}</h3>
                <p className="text-black text-xl">{item.desc}</p>
              </div>
              {!!item.icon && item.icon}
            </div>
          </>
        ))}
      </div>
    )}
  </div>
);

export default Dropdown;
