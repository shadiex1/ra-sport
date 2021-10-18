import React from "react";

import PanelContainer from "./panel container/panelContainer";

import * as styles from "./accordion.module.scss";

class Accordion extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      activeChildId: null
    }
  }

  toggleActiveChild = id => {
    if (this.state.activeChildId === id) {
      this.setState({ activeChildId: null });
    } else {
      this.setState({ activeChildId: id });
    }
  }

  toggleSidebar = () => {
    const { toggleSidebar } = this.props;
    this.toggleActiveChild(null);
    toggleSidebar();
  }

  render() {

    const { categories } = this.props;
    const { activeChildId } = this.state;

    return (
      <div className={styles.Accordion}>
        {
          categories.map(category => {
            return (
              <PanelContainer
                category={category}
                activeCategoryId={activeChildId}
                toggleActiveCategory={this.toggleActiveChild}
                toggleSidebar={this.toggleSidebar}
                key={category.id}
              />
            );
          })
        }
      </div>
    );
  }
}



export default Accordion;