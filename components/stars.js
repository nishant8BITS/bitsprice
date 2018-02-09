const Page = ({ stars }) => <div>Next stars: {stars}</div>;

Page.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const json = await res.json();
  return { stars: "1" };
};

export default Page;
