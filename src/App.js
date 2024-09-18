
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

export default class App extends Component {
  api = process.env.REACT_APP_NEWS

  render() {

    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<News api={this.api} key="general" category='general' />} />
            <Route path="/sports" element={<News api={this.api} key="sports" category='sports' />} />
            <Route path="/technology" element={<News api={this.api} key="technology" category='technology' />} />
            <Route path="/science" element={<News api={this.api} key="science" category='science' />} />
            <Route path="/general" element={<News api={this.api} key="general" category='general' />} />
            <Route path="/health" element={<News api={this.api} key="health" category='health' />} />
            <Route path="/entertainment" element={<News api={this.api} key="entertainment" category='entertainment' />} />
            <Route path="/business" element={<News api={this.api} key="business" category='business' />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

