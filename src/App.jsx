import Header from "./Components/Header/header";


const App = () => {
  return (
   <>
   <Header />
   <Header author='Oleg' message='Hello!' isOnline={true}/>
   <Header author='Sasha' message='How are you?' isOnline={false}/>
   <Header author='Ann' message='when?' isOnline={true}/>
  </>
  );
};

export default App;
