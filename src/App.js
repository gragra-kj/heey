
import './App.css';
const Person=(props)=>{
  return(
  <>
  <h1>Name: {props.name}</h1>
  <h2>Last Name: {props.lastName}</h2>
  <h2>Age: {props.age}</h2>
  </>
  )
}

 const App =() =>{
  //const name='Grace';
  //const isNameShowing=true ;
  return (
    <div className="App">
      <Person name={'Grace'} lastName={'Muthui'} age={23}/>
      <Person name={'Phoebe'} lastName={'Mwende'} age={26}/>
      <Person name={'Muthui'} lastName={'joyy'} age={19}/>

      {/* <h1>Hello {2+27}!</h1>
      {name ? (
        <>
        <h1>{name}</h1>
        </>
      ):(
        <>
        <h1>test</h1>
        <h2>There is no name</h2>
        </>
      )

      } */}

    </div>
  );
}

export default App;
