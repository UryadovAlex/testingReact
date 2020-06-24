import React from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import SharedButton from "./component/button";
import ListItem from "./component/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

const tempArr = [
  {
    fName: "Alex",
    lName: "Uryadov",
    email: "alex@gmail.com",
    age: 34,
    onlineStatus: true,
  },
];

class App extends React.Component {
  fetch = () => {
    this.props.fetchPosts();
  };
  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render the posts!"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(App);
