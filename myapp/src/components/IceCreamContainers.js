import React from 'react'
import { buyIceCream } from "../redux";
import { connect } from "react-redux";
function IceCreamContainers(props) {
  return (
    <div>
      <div>
         <h2>Number of IceCream -{props.numOfIceCream}</h2>
         <button onClick={props.buyIceCream}>Buy IceCream</button>
       
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainers);





