import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { fetchPages } from "../actions/page_actions";
import PageIndexItem from "./page_index_item";

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPages();
  }

  composePageList() {
    const pages = this.props.pages;
    const pageList = [];
    Object.keys(pages).forEach(page_id => {
      let page = pages[page_id];
      // pageList.push(<li key={page_id}>{page.title}</li>);
      pageList.push(
        <PageIndexItem key={page_id} title={page.title} url={page.url} />
      );
    });

    return pageList;
  }

  render() {
    if (this.props.pages === undefined) {
      return <p>LOADING!!</p>;
    }

    return (
      <div className="page-index-container">
        <ul>{this.composePageList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    pages: entities.pages
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
