import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { fetchPages } from "../actions/page_actions";

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchPages();
  }

  composePageList() {
    return <li>list item</li>;
  }

  render() {
    if (this.props.pages === undefined) {
      return <p>LOADING!!</p>;
    }
    return (
      <div>
        <ul>{this.composePageList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    page: entities.pages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPages: () => {
      return dispatch(fetchPages());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PageIndex)
);
