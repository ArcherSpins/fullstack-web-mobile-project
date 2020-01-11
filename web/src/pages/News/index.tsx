import React from 'react';
import { Card, FilterNews } from '../../components';
import './style.scss';

class NewsPage extends React.Component<{}, { isScrolling: boolean }> {

  constructor(props: any) {
    super(props);

    this.state = {
      isScrolling: false
    }
  }

  handlerScroll = (e: any) => {
    this.setState({
      isScrolling: e.target.scrollTop > 40,
    });
  }

  render() {
    const { isScrolling } = this.state;

    return (
      <div className="body-content" onScroll={this.handlerScroll}>
        <div className="page container">
          <div className="d-flex justify-content-between">
            <div className="col-4" style={{ flex: 1, maxWidth: 400 }}>
              <div className={isScrolling ? 'fixed-filter' : ''}>
                <FilterNews />
              </div>
            </div>
            <div className="col-8" style={{ flex: 1 }}>
              <div className="mb-20">
                <Card />
              </div>
              <div className="mb-20">
                <Card />
              </div>
              <div className="mb-20">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPage;
