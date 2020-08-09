import React from 'react';
import axios from 'axios';
import Root from './root';
import commentImg from "../img/comments.jpg"

export default class CommentsSec extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        comments: []
      }
    }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }

  render() {
    return (

    <Root>
        <div className="container">
            <div className="row">
                <div className="col-12 m-auto">
                    <div className="img-c">
                        <img src={commentImg} alt="commentImg" />
                    </div>
                    <ul className="comment-list">
                        { this.state.comments.map(comment => <li key={comment.id}>
                                                                <h6>{comment.email}</h6>
                                                                <p>{comment.body}</p>
                                                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    </Root>
    )
  }
}