import React, {Component} from 'react';
import Card from '../UI/Card/Card';
import styles from './PayslipForm.module.css';
import Button from '../UI/Button/Button';
import axios from 'axios';
import Payslip from '../Payslip/Payslip';
// import Payslip from '../Payslip/Payslip';

class PayslipForm extends Component {

    state = {
        firstname :'',
        lastname  :'',
        annualsalary :'',
        super : '',
        date : ''
    }

    empolyeePostHandler = () => {
        const data = {
            firstname :this.state.firstname,
            lastname : this.state.lastname,
            annualsalary : this.state.annualsalary,
            super : this.state.super,
            date : this.state.date
        }
        axios.post('https://payslip-project.firebaseio.com/posts', data)
            .then(response =>{
                console.log(response);
            }).catch(error =>{
                console.log(error);
            })
    }
    render () {
        return(
            <div className={styles.payslipForm}>
                <h3>Employee Monthly Payslip</h3>
                    <Card>
                        <form>
                            <div className={styles.formControl}>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" className="form-control" name="firstname" placeholder="First Name" required value={this.state.firstname} onChange={(event) => this.setState({firstname: event.target.value})}/>
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" className="form-control" name="lastname" placeholder="Last Name" required="" value={this.state.lastname} onChange={(event) => this.setState({lastname: event.target.value})}/>
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="salary">Annual Salary</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" value={this.state.annualsalary} onChange={(event) => this.setState({annualsalary: event.target.value})}/>
                                    <div className="input-group-append">
                                        <span className="input-group-text">.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="rate">Super rate</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">%</span>
                                    </div>
                                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" value={this.state.super} onChange={(event) => this.setState({super: event.target.value})}/>
                                </div>
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="date">Start Date</label>
                                <div className ="input-group">
                                    <div className="input-group-prepend">
									    <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-calendar-check"></i></span>
								    </div>
                                        <input type="text" className="form-control datepicker" id="validationCustomUsername" placeholder="DD/MM/YY" aria-describedby="inputGroupPrepend"  value={this.state.date} onChange={(event) => this.setState({date: event.target.value})}/>
                                 </div>       
                            </div>
                            <Button btnType= "GeneratePayslip" onClick = {this.empolyeePostHandler}> Generate Payslip</Button>
                            <Button btnType= "Reset"> Reset </Button>
                        </form>
               
                    </Card>

                <Payslip/>

            </div>
        );
    }
}

export default PayslipForm;