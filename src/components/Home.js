
import React, { Component } from 'react';
import Sidebar from './Workspace/Sidebar/index.sidebar';
import Dashboard from './Workspace/Dashboard/index.dashboard';
import Header from './Workspace/Header/index.header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedSidebar: 'Accounts',
      SelectedTab: 'List Accounts',
    };
    this.HandleSidebarChangeAction = this.HandleSidebarChangeAction.bind(this);
    this.HandleTabChangeAction = this.HandleTabChangeAction.bind(this);
  }

  HandleSidebarChangeAction(SelectedSidebar) {
    this.setState({ SelectedSidebar });
  }

  HandleTabChangeAction(SelectedTab) {
    this.setState({ SelectedTab });
  }

  render() {
    return (
      <div className="body-container">
        <Sidebar
          {...this.state}
          HandleSidebarChangeAction={this.HandleSidebarChangeAction}
          HandleTabChangeAction={this.HandleTabChangeAction}
        />
        <Header />
        <Dashboard
          {...this.state}
          HandleSidebarChangeAction={this.HandleSidebarChangeAction}
          HandleTabChangeAction={this.HandleTabChangeAction}
        />
      </div>
    );
  }
}

export default Home;
