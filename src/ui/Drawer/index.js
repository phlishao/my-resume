import React from "react";
import classnames from "classnames";
// import Portal from "../Portal";
import "./index.less";

class Drawer extends React.PureComponent {
  render() {
    const {
      children, //Drawer的内容区
      anchor = "right",
      onClose,
      open,
      style
    } = this.props;

    const drawerCx = classnames("drawer", {
      "drawer-open": open
    });
    const containerCx = classnames("drawer-container", {
      "drawer-anchor-right": anchor === "right",
      "drawer-anchor-left": anchor === "left",
      "drawer-anchor-top": anchor === "top",
      "drawer-anchor-bottom": anchor === "bottom",
      "drawer-anchor-search": anchor === "search",
      "drawer-open": open
    });
    const maskCx = classnames("drawer-mask", {
      "drawer-open": open
    });
    return (
      //   <Portal>
      <div className={drawerCx}>
        <div className={containerCx} style={style}>
          {children}
        </div>
        <div className={maskCx} onClick={onClose} />
      </div>
      //   </Portal>
    );
  }
}
export default Drawer;
