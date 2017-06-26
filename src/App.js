import React, { Component } from 'react';
import logo from './logo.svg';
// import corner from './corner.svg';
import './App.css';
import BotwDialog from './BotwDialog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="site-nav"><a className="site-title" href="">Site Title</a>
          <div className="main-nav">
            <ul>
              <li>Pages</li>|
              <li><a href="">Link1</a></li>
              <li><a href="">Link2</a></li>
              <li><a href="">Link3</a></li>
              <li><a href="">Link4</a></li>
            </ul>
          </div>
        </nav>
        <article className="main-article">
          <header>
            <h3 className="byline">Posted by <a href="">Author Name</a> |  <a href="">October 11, 2016</a> |  <a href="">category1</a>, <a href="">category2</a></h3>
            <h1 className="article__headline">Article headline lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
            <h2 className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sunt placeat, omnis provident eius sapiente fugiat sequi officiis laboriosam dolor</h2>
          </header>
          <article>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt odio soluta tenetur doloribus eligendi sint, delectus sunt recusandae id maxime praesentium consectetur incidunt quam omnis officia, voluptatem nostrum in!</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur corporis harum quaerat. Qui aliquam nostrum laborum dicta et, soluta suscipit autem, mollitia, eveniet blanditiis ipsa! Cum beatae aspernatur iure laborum quibusdam, facere natus odit ex, inventore illo laboriosam tempora asperiores. Harum illo odit, nostrum veritatis, voluptate ea deleniti ipsa alias!</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ipsa perferendis provident ducimus aliquam esse tenetur ex eveniet animi in.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ipsa perferendis provident ducimus aliquam esse tenetur ex eveniet animi in.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid praesentium similique soluta in facilis quidem dicta inventore odio. Nisi debitis, itaque at in suscipit quisquam iusto veritatis officia doloremque praesentium harum voluptas ducimus animi, aspernatur repellendus dolor delectus expedita esse minus laborum? Consequatur veniam magni expedita tempore aperiam iste, culpa? &nbsp;&spades;</p>
          </article>
          <BotwDialog imgSrc={logo} dialogTitle="Baked Apple">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt odio soluta tenetur doloribus eligendi sint, delectus sunt recusandae id maxime praesentium consectetur incidunt quam omnis officia, voluptatem nostrum in!</div>
          </BotwDialog>
        </article>
      </div>
    );
  }
}

export default App;
