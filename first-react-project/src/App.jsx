// import Header from "./header.jsx"
// import Footer from "./footer.jsx"
// import Food from "./food.jsx"
// import Card from "./card.jsx"
// import Button from "./button.jsx"
import Student from "./student.jsx"

function App() {

  return(
    <>
    <Student name='SpongeBob' age={25} isStudent={true}></Student>
    <Student name='Patrick' age={28} isStudent={false}></Student>
    <Student name='Squidward' age={33} isStudent={false}></Student>
    <Student name='Sandy' age={28} isStudent={true}></Student>
    <Student name = 'larry'></Student>
    </>
  )
}

export default App