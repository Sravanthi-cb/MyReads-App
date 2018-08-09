import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BookTab from './Tabs';
import Search from './Search';

class Main extends Component {
  render () {
      return (
        <Switch>
         <Route exact path="/" render={() => (
          <BookTab 
          books={this.props.state.books}
          moveShelf={this.props.moveShelf}
          tabName='currentlyReading'
        />
        )}/>

        <Route  path="/WantToRead" render={() => (
          <BookTab 
          books={this.props.state.books}
          moveShelf={this.props.moveShelf}
          tabName='wantToRead'
        />
        )}/>

        <Route  path="/Read" render={() => (
          <BookTab 
          books={this.props.state.books}
          moveShelf={this.props.moveShelf}
          tabName='read'
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