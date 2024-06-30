import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux';
const Shop = () => {
  const balance=useSelector(state=>state.amount); //using this hook we can read the state value which initially we have set to zero
  const dispatch=useDispatch();
  const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);
  return (
    <div>
    <h2>Deposit/ Withdraw Money</h2>
      <button type="button" class="btn btn-primary" onClick={()=>{withdrawMoney(100)}}>-</button>
      Update Balance {balance}
      <button type="button" class="btn btn-primary" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
