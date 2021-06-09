import EnhancedComments from "./CommentCount";
import LikesCount from "./LikesCount";
import { EmployeeBasicDetails, EmployeeSalaryDetails } from "./Hoc1";
function App() {
  return (
    <div className="App">
      <EnhancedComments />
      <LikesCount />
      <EmployeeBasicDetails />
      <EmployeeSalaryDetails />
    </div>
  );
}

export default App;
