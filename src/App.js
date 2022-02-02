import Form from "./Components/Form/Form";
import DataProvider from "./Context/DataProvider";
import useGetData from "./Hooks/useGetData";


function App() {
  return (
    <DataProvider>
      <Form></Form>
      </DataProvider>
  );
}

export default App;
