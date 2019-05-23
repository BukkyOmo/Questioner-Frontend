import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const image = 'https://res.cloudinary.com/forsetti/image/upload/v1558483538/Questioner/event4.jpg';

const AdminPage = () => (
  <React.Fragment>
    <div className='container'>
      <button
        className='admin-btn'
        type='button'
      >
        {' '}
        <Link to='/admin-create'><i className='fas fa-plus fa-lg' /></Link>
        {' '}
      </button>
      <main className='flex-admin'>
        <div className='admin-div'>
          <img src={image} alt='eventimage' className='admin-image' />
          <div>
            <h4>Andela Boot camp</h4>
            <div className='admin-buttons'>
              <button
                className='inner-admin'
                type='button'
              >
                <i className='far fa-edit fa-lg' />
              </button>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-trash-alt fa-lg'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='admin-div'>
          <img src={image} alt='eventimage' className='admin-image' />
          <div>
            <h4>Andela Boot camp</h4>
            <div className='admin-buttons'>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-edit'
                />
              </button>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-trash-alt'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='admin-div'>
          <img src={image} alt='eventimage' className='admin-image' />
          <div>
            <h4>Andela Boot camp</h4>
            <div className='admin-buttons'>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-edit'
                />
              </button>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-trash-alt'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='admin-div'>
          <img src={image} alt='eventimage' className='admin-image' />
          <div>
            <h4>Andela Boot camp</h4>
            <div className='admin-buttons'>
              <button
                className='inner-admin'
                type='button'
              >
                <i className='far fa-edit fa-lg' />
              </button>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-trash-alt fa-lg'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='admin-div'>
          <img src={image} alt='eventimage' className='admin-image' />
          <div>
            <h4>Andela Boot camp</h4>
            <div className='admin-buttons'>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-edit'
                />
              </button>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-trash-alt'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='admin-div'>
          <img src={image} alt='eventimage' className='admin-image' />
          <div>
            <h4>Andela Boot camp</h4>
            <div className='admin-buttons'>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-edit'
                />
              </button>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-trash-alt'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='admin-div'>
          <img src={image} alt='eventimage' className='admin-image' />
          <div>
            <h4>Andela Boot camp</h4>
            <div className='admin-buttons'>
              <button
                className='inner-admin'
                type='button'
              >
                <i className='far fa-edit fa-lg' />
              </button>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-trash-alt fa-lg'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='admin-div'>
          <img src={image} alt='eventimage' className='admin-image' />
          <div>
            <h4>Andela Boot camp</h4>
            <div className='admin-buttons'>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-edit'
                />
              </button>
              <button
                className='inner-admin'
                type='button'
              >
                <i
                  className='far fa-trash-alt'
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </React.Fragment>

);

export default AdminPage;
