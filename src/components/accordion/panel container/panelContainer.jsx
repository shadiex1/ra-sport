import React from "react";
import Panel from './panel/panel';

class PanelContainer extends React.Component {
  render() {
    const { category, activeCategoryId, toggleActiveCategory,  toggleSidebar } = this.props;
    
    return (
      <Panel
        category={category}
        toggleSidebar={toggleSidebar}
        toggleActiveCategory={toggleActiveCategory}
        activeCategoryId={activeCategoryId}
        key={category.id}
      />
    );
  }
}

export default PanelContainer;