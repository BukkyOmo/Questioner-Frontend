import React, { Component } from 'react';

class AdminCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      location: '',
      meetup_date: '',
      image: '',
      tags: ''
    };
  }
  handleSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <React.Fragment>
        <form action='POST' className='flex_admincreate' onSubmit='this.handleSubmit'>
          <div className='items'>
            <h1>Add Meetup</h1>
          </div>
           <div>
               <label Htmlfor='meetup_topic'>Topic</label>
            </div>
          <div className='items'>
            <input
              type='text'
              name='meetup_topic'
              id='meetup_topic'
              placeholder='topic'
              value={topic}
            />
          </div>
          <div>
             <label Htmlfor='meetup_location'>Location</label>
          </div>
          <div className='items'>
            <input
              type='text'
              name='meetup_location'
              id='meetup_location'
              placeholder='location'
              value={location}
            />
          </div>
          <div>
            <label Htmlfor='meetup_date'>Date</label>
          </div>
          <div className='items'>
            <input
              type='date'
              name='meetup_date'
              id='meetup_date'
              placeholder='date'
              value={meetup_date}
            />
          </div>
          <div>
            <label Htmlfor='image'>Image</label>
          </div>
          <div className='items_create'>
            <input
              type='file'
              name='meetup_image'
              id='meetup_image'
              placeholder='image'
              value={meetup_image}
            />
          </div>
          <div>
            <label Htmlfor='meetup_tag'>Tags</label>
          </div>
          <div className='items'>
            <input
              type='text'
              name='meetup_tag'
              id='meetup_tag'
              placeholder='Add tags'
              value={meetup_tag}
            />
          </div>
          <div className='items'>

            <input type='button' value='Add meetup' />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AdminCreate;
