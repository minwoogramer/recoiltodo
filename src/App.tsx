import GlobalStyle from './GlobalStyle'
import ToDoList from './components/TodoList';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
function App() {
  return (<>
        <ThemeProvider theme={darkTheme}>
    <GlobalStyle/>
    <ToDoList/>
    </ThemeProvider>
    </>
  );
}

export default App;
