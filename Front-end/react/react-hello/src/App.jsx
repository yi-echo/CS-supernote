import { fetchUsers } from "./api/user";
const handleTest = async () => {
  console.log("测试请求");
  const res = await fetchUsers();
  console.log(res.data);
};

function App() {
  return (
    <>
      <button onClick={handleTest}>测试请求</button>
    </>
  );
}

export default App;
