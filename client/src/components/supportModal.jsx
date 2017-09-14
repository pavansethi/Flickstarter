// import React, { Component } from 'react';
// import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react';
//
// class SupportModal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false
//     };
//   }
//
//   // show = dimmer => () => this.setState({dimmer, open: true});
//   // close = () => this.setState({open: false});
//
//   show() {
//     this.setState({
//       dimmer,
//       open: true
//     });
//   }
//
//   dimmer() {
//     this.setState({
//       dimmer,
//       open: true
//     });
//   }
//
//
//   close() {
//     this.setState({
//       open: false
//     });
//   }
//
//   componentWillMount() {
//     const {open, dimmer} = this.state;
//   }
//
//   render() {
//     // const {open, dimmer} = this.state;
//
//     return (
//       <div>
//
//         <Button onClick={this.show('blurring')}>Blurring</Button>
//
//         <Modal dimmer={dimmer} open={open} onClose={this.close}>
//           <Modal.Header>Select a Photo</Modal.Header>
//           <Modal.Content image>
//             <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png'/>
//             <Modal.Description>
//               <Header>Default Profile Image</Header>
//               <p>We've found the following gravatar image associated with your e-mail address.</p>
//               <p>Is it okay to use this photo?</p>
//             </Modal.Description>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button color='black' onClick={this.close}>
//               Nope
//             </Button>
//             <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close}/>
//           </Modal.Actions>
//         </Modal>
//
//       </div>
//     )
//   }
// }
//
//
// export default SupportModal;
