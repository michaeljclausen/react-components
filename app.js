class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

     var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    )
  }

}


let groceryItems = ['Kale', 'more kale', 'even more kale', 'too much Kale'];

//let items = groceryItems.map(thing =>  <GroceryListItem item={thing}/>);

let GroceryList = (props) => {


return (
  <ul>
    {props.list.map(item => <GroceryListItem item={item}/>)}
  </ul>
)
}
ReactDOM.render(<GroceryList list={groceryItems}/>, document.getElementById("app"));




