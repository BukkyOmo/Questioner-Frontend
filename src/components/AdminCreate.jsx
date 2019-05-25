// import React, { Component } from 'react';

// class AdminCreate extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   topic: '',
//     //   location: '',
//     //   meetup_date: '',
//     //   image: '',
//     //   tags: ''
//     // };
//   }

//   // handleSubmit = () => {
//   //   console.log(this.state);
//   // }

//   render() {
//     const {
//       topic,
//       location,
//       meetupDate,
//       meetupImage,
//       meetupTag
//     } = this.state;
//     return (
//       <React.Fragment>
//         <form action='POST' className='flex_admincreate' onSubmit='this.handleSubmit'>
//           <div className='items'>
//             <h1>Add Meetup</h1>
//           </div>
//           <div>
//             <label Htmlfor='meetup_topic'>
//               Topic
//               <div className='items'>
//                 <input
//                   type='text'
//                   name='meetup_topic'
//                   id='meetup_topic'
//                   placeholder='topic'
//                   value={topic}
//                 />
//               </div>
//             </label>
//           </div>
//           <div>
//             <label Htmlfor='meetup_location'>
//               Location
//               <div className='items'>
//                 <input
//                   type='text'
//                   name='meetup_location'
//                   id='meetup_location'
//                   placeholder='location'
//                   value={location}
//                 />
//               </div>
//             </label>
//           </div>
//           <div>
//             <label Htmlfor='meetup_date'>
//               Date
//               <div className='items'>
//                 <input
//                   type='date'
//                   name='meetup_date'
//                   id='meetup_date'
//                   placeholder='date'
//                   value={meetupDate}
//                 />
//               </div>
//             </label>
//           </div>
//           <div>
//             <label Htmlfor='image'>
//               Image
//               <div className='items_create'>
//                 <input
//                   type='file'
//                   name='meetup_image'
//                   id='meetup_image'
//                   placeholder='image'
//                   value={meetupImage}
//                 />
//               </div>
//             </label>
//           </div>
//           <div>
//             <label Htmlfor='meetup_tag'>
//               Tags
//               <div className='items'>
//                 <input
//                   type='text'
//                   name='meetup_tag'
//                   id='meetup_tag'
//                   placeholder='Add tags'
//                   value={meetupTag}
//                 />
//               </div>
//             </label>
//           </div>
//           <div className='items'>

//             <input type='button' value='Add meetup' />
//           </div>
//         </form>
//       </React.Fragment>
//     );
//   }
// }

// export default AdminCreate;
