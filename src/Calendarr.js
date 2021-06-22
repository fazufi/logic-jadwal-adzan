import React, { Component } from "react";
import "./App.css";
import Calendar from 'react-calendar';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text
} from "@chakra-ui/react" 
import 'react-calendar/dist/Calendar.css';

export default class Calendarr extends Component {
  state={
    value: new Date(),
   
  }
  
  togle = (e)=> {
    this.setState({show: e})
  }
  render() {
    return (
      <div>
      <Calendar
        onChange={(weekNumber, date, event) => alert('Clicked week: ', weekNumber, 'that starts on: ', date)}
        value={this.state.value}
      />

      </div>
    );
  }
}




// class Modal1 extends Component {
//   render() {
//     return (
//       <div>
//         <Modal blockScrollOnMount={false} isOpen={()=> this.props.togle(true)} onClose={() => {this.props.togle(false)}}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Text fontWeight="bold" mb="1rem">
//               You can scroll the content behind the modal
//             </Text>
//             <Lorem count={2} />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant="ghost">Secondary Action</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   state= {
//    orang: ["kamu", "dia", "aku"]
//   }

  // componentDidMount(){
  //   let r = []
  //   for (let i = 0; i < 30; i++) {
  
  //      r.push(this.state.orang[i % 3])
  //   }
  //   this.setState({orang : r})
  // }
  // render() {
  //   return (
  //     <div>
  //       {this.state.orang.map((item)=>
  //       <p>{item}</p>
  //       )}
  //     </div>
  //   )
  // }
// }


