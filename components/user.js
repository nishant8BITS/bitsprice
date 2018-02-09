import Fetch from "isomorphic-unfetch";

class UserInfo extends React.Component {

  static async getInitialProps(){
      console.log("geting profile info");
      const res = await Fetch("http://api.github.com/users/nishant8BITS");
      const data = await res.json();
      return {data};
  }

  render() {
    return <div>
        <h1>UserInfo:</h1>
        {this.props.username}
      </div>;
  }
}

export default UserInfo;