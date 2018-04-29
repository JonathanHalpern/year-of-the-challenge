import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import CommentItem from './CommentItem';

const SubmitButton = styled(Button)`
  margin-top: 20px!important;
`;

const StyledCircularProgress = styled(CircularProgress)`
  margin-left: 10px;
`;

class CommentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      post: props.postName,
      isSubmitting: false,
      submittedComments: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.appendComment = this.appendComment.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isSubmitting: true });
    const data = {
      fields: {
        name: this.state.name,
        message: this.state.message,
        post: this.state.post,
      },
    };
    fetch('https://api.staticman.net/v2/entry/JonathanHalpern/year-of-the-challenge/master/comments', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      this.setState({ isSubmitting: false });
      this.appendComment(data.fields);
    });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  appendComment(comment) {
    const updatedSubmittedComments = [
      comment,
      ...this.state.submittedComments,
    ];
    this.setState({ submittedComments: updatedSubmittedComments });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="fields[post]" type="hidden" value={this.props.postName} />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="name"
              label="Your name"
              name="fields[name]"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="name"
              label="Comment"
              name="fields[message]"
              type="text"
              multiline
              rows={2}
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </Grid>
        </Grid>
        <SubmitButton
          color="primary"
          variant="raised"
          type="submit"
          disabled={this.state.isSubmitting}
        >
          { !this.state.isSubmitting ? 'Loading...' : 'Post' }
          { !this.state.isSubmitting && <StyledCircularProgress color="default" size={20} /> }
        </SubmitButton>
        <div>
          {
            this.state.submittedComments.map(comment => (
              <CommentItem name={comment.name} message={comment.message} />
            ))
          }
        </div>
      </form>
    );
  }
}

export default CommentForm;
