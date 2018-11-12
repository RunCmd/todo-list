import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import ItemModal from './itemModal';


class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
  }
 
  componentDidMount(){
    this.props.getItems();
  
  }
  onDelete = (id) =>{
    this.props.deleteItem(id);
  }
  onEdit (){

  }

    render(){
      const { items } = this.props.item;
    
      return(
          <Container>
            <ItemModal />
            <ListGroup>
              <TransitionGroup className="shopping-list col-md-12">
              {items.map(({_id, name, date}) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {name} 
                  <Button 
                  className="remove-button"
                  size="sm"
                  color="danger"
                  onClick={this.onDelete.bind(this, _id)}>
                  &times;
                  </Button>
                  <Button 
                  className="remove-button"
                  size="sm"
                  color="primary"
                  onClick={this.onEdit}>
                  <i className="fa fa-edit"></i>
                  </Button>
                    <hr/>
                    <p>Posted on : {date.slice(0, 10)} / {date.slice(12, 19)}</p>
                </ListGroupItem>
              </CSSTransition>
              ))}
              </TransitionGroup>
            </ListGroup>
          </Container>
      )
    }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
