import EnhancedComments from "./CommentCount";
import LikesCount from "./LikesCount";
import Increment from "./Increment";
import Decrement from "./Decrement";
import { EmployeeBasicDetails, EmployeeSalaryDetails } from "./Hoc1";
function App() {
  return (
    <div className="App">
      <EnhancedComments />
      <LikesCount />
      <EmployeeBasicDetails />
      <EmployeeSalaryDetails />
      <Increment />
      <Decrement />
    </div>
  );
}

export default App;
