import styled from "styled-components"


function App() {
  return (
    <Layout>
    <div>dsa</div>
    <div>dsa</div>
    <div>dsa</div>
    <div>dsa</div>
    <div>dsa</div>
    </Layout>
  );
}

export default App;


const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-width: 500px;
  @media screen and (max-width: 425px) {
    width: 425px;
  }
`;

