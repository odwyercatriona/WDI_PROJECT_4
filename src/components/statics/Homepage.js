import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import { Grid, Row, Col, Image } from 'react-bootstrap';

import Auth from '../../lib/Auth';

class Homepage extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    Auth.isAuthenticated() &&

    Axios
      .get(`/api/users/${Auth.getPayload().userId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="page-banner col-md-12">
            <h1>Welcome to Ho Ho Hosts! </h1>
            { Auth.isAuthenticated() &&  <h2><em>Please click the icons to search for dinners or attendees for your dinner</em></h2>}
            { Auth.isAuthenticated() && <Link to={'/dinners'}><img src={'https://images.vexels.com/media/users/3/130189/isolated/preview/93b472a150245f86731d83b3f630ffb8-empty-dinner-plate-icon-by-vexels.png'} className="img-responsive icons" /></Link>}
            { Auth.isAuthenticated() && <Link to={'/users'}><img src={'http://www.roughleyinsurance.com/wp-content/uploads/2011/11/ServiceIcon-Group.png'} className="img-responsive icons" /></Link>}
          </div>
        </div>

        { this.state.user.dinnersCreated && this.state.user.dinnersCreated.map(dinner => {
          return(
            <div key={dinner.id} >
              <h2><Link to={`/dinners/${dinner.id}`}> Dinners I am hosting: {dinner.title}<img src={dinner.image} className="img-responsive image-tile hp" /></Link></h2>

            </div>
          );
        })
        }

        { this.state.user.dinnersAttending && this.state.user.dinnersAttending.map(dinner => {
          return(
            <div key={dinner.id} >
              <h2><Link to={`/dinners/${dinner.id}`}><strong>Dinners I am Attending: {dinner.title}<img src={dinner.image}  className="img-responsive" /></strong></Link></h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Homepage;
