import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {CurrentlyReading, WantToRead, Read} from './Tabs';
import Search from './Search';

class Main extends Component {
  render () {
      return (
        <Switch>
         <Route exact path="/" render={() => (
          <CurrentlyReading 
          books={this.props.state.books}
          moveShelf={this.props.moveShelf}
        />
        )}/>

        <Route  path="/WantToRead" render={() => (
          <WantToRead 
          books={this.props.state.books}
          moveShelf={this.props.moveShelf}
        />
        )}/>

        <Route  path="/Read" render={() => (
          <Read 
          books={this.props.state.books}
          moveShelf={this.props.moveShelf}
        />
        )}/>
        
        <Route path="/Search" render={() => (
          <Search
          moveShelf={this.props.moveShelf}
          books={this.props.state.books}
        />
        )}/>
        </Switch>  
      );
  }
}

export default Main;