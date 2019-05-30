import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllMeetups } from '../actions';
import meetup1 from '../assets/images/event1.jpg';

export class AllMeetups extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.meetups();
  }

  meetups = () => {
    const { dispatch } = this.props;
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        token
      }
    };
    dispatch(getAllMeetups(config));
  };

  render() {
    const { meetups } = this.props;
    return (
      <React.Fragment>
        <h1 className='meetups-header'>All Meetups</h1>
        <main className='main'>
          {meetups.map(meetup => (
            <div className='flex3' key={meetup.id}>
              <Link to='single-meetup.html'>
                <img src={meetup.image || meetup1} alt='eventimage' />
              </Link>
              <div className='flex-item'>
                <h3>{meetup.topic}</h3>

                <p>{meetup.happeningon}</p>

                <p>{meetup.location}</p>

                <p className='flex-item2'>
                  <Link to={`/meetups/${meetup.id}`}>View Details</Link>
                </p>
              </div>
            </div>
          ))}
        </main>

        <div className='center'>
          <div className='pagination'>
            <Link to='/'>&laquo;</Link>
            <Link to='/' className='active'>
              1
            </Link>
            <Link to='/'>2</Link>
            <Link to='/'>3</Link>
            <Link to='/'>4</Link>
            <Link to='/'>&raquo;</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ meetups }) => ({
  loading: meetups.isLoading,
  meetups: meetups.getMeetups
});

export default connect(mapStateToProps)(AllMeetups);
