import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeetup } from '../actions';

export class CreateMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      location: '',
      happeningOn: '',
      image: '',
      tags: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      topic, location, happeningOn, image, tags
    } = this.state;
    const data = {
      topic,
      location,
      happeningOn,
      image,
      tags
    };
    const { createMeetup: meetup } = this.props;
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        token
      }
    };
    await meetup(data, config);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  imageChange = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  render() {
    const {
      topic, location, happeningOn, image, tags
    } = this.state;
    const { loading } = this.props;
    return (
      <React.Fragment>
        <form className='flex_admincreate' onSubmit={this.handleSubmit}>
          <div className='items'>
            <h1>Add Meetup</h1>
          </div>
          <div>
            <label htmlFor='meetup_topic'>
              Topic
              <div className='items'>
                <input
                  type='text'
                  name='topic'
                  placeholder='topic'
                  onChange={this.handleChange}
                  value={topic}
                />
              </div>
            </label>
          </div>
          <div>
            <label htmlFor='meetup_location'>
              Location
              <div className='items'>
                <input
                  type='text'
                  name='location'
                  placeholder='location'
                  onChange={this.handleChange}
                  value={location}
                />
              </div>
            </label>
          </div>
          <div>
            <label htmlFor='meetup_date'>
              Date
              <div className='items'>
                <input
                  type='date'
                  name='happeningOn'
                  placeholder='date'
                  onChange={this.handleChange}
                  value={happeningOn}
                />
              </div>
            </label>
          </div>
          <div>
            <label htmlFor='image'>
              Image
              <div className='items_create'>
                <input
                  type='file'
                  name='image'
                  placeholder='image'
                  onChange={this.imageChange}
                />
              </div>
            </label>
          </div>
          <div>
            <label htmlFor='meetup_tag'>
              Tags
              <div className='items'>
                <input
                  type='text'
                  name='tags'
                  placeholder='Add tags'
                  onChange={this.handleChange}
                  value={tags}
                />
              </div>
            </label>
          </div>
          <div className='items'>
            <button className='button' type='submit' value='Add meetup'>
              Create Meetup
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ meetup }) => ({
  loading: meetup.isLoading,
  submit: meetup.submit,
  redirect: meetup.redirect
});

const actionCreator = {
  createMeetup
};

export default connect(
  mapStateToProps,
  actionCreator
)(CreateMeetup);
