import {Hello,HelloWithoutJSX} from "./Hello";
import {Button} from "./Button";
import {Welcome} from "./Welcome";
import {UserProfile} from "./UserProfile";
import {ContactForm} from "./ContactForm";
import { StyleForm } from "./StyleForm";
import {CandidateProfile} from "./CandidateProfile";
import {Product} from "./Product";
import { CardWrapper } from "./CardWrapper";
import { ProductList } from "./ProductList";
import { NameList } from "./NameList";
import './App.css';

function App() {
 
  return (
    <div>
      <NameList />
    <ProductList />
        <CardWrapper title="User Profile">
          <p>Bruce Wayne</p>
          <p>wayne@gmail.com</p>
          <button>Edit Profile</button>
      </CardWrapper>
      <h1>My-Hub</h1>
      <Hello />
      <UserProfile />
      <ContactForm />
      <HelloWithoutJSX />
      <Button />
      <Welcome name= "Batman" alias = "Bruce"/>
      <Welcome name= "Superman" alias = "Clark"/>
      <Welcome name= "Spiderman" alias = "Peter"/>
      <StyleForm />
      <CandidateProfile />
      <Product title = "iphone 17 pro max" price = {999} inStock = {true} categories = {[" electronics ", " mobile", " daily use", " appliances"]} />
    </div>
  );
}

export default App
