import Fetch from 'isomorphic-unfetch';
import Layout from "../components/layout";
import Prices from "../components/prices"; 
import Stars from "../components/stars"; 

const Index = props => (
  <div>
    <Stars />
    <Layout>
      <h1>
        <div>Welcome to BitzPrice</div>

        <Prices bpi={props.bpi} />
      </h1>
    </Layout>
  </div>
);

Index.getInitialProps = async function(){
    const result  = await Fetch
    ("https://api.coindesk.com/v1/bpi/currentprice.json")
    const data = await result.json();

    return {
        bpi: data
    }
}

export default Index;