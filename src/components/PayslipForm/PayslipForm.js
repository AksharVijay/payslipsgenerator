import React, {Component} from 'react';
import Card from '../UI/Card/Card';
import styles from './PayslipForm.module.css';
import Button from '../UI/Button/Button';


class PayslipForm extends Component {

    userData;

    state = {
        firstName :'',
        lastName  :'',
        annualSalary :'',
        superm : '',
        date : '',
        //showPayslip : false,
        incomeTax : '',
        netIncome :'',
        superRate :'',
        totals : '',
        showing : false
    }


    firstNameHandler = (e) => {
        this.setState({firstName : e.target.value});
    }

    lastNameHandler = (e) => {
        this.setState({lastName : e.target.value});
    }
    
    annualSalaryHandler = (e) => {
        if (e.target.validity.valid) {
            var anSal = +(e.target.value)
            var iT = this.state.incomeTax
            var nT = this.state.netIncome
            this.setState({
                annualSalary: anSal,
                incomeTax: this.state.annualSalary * (0.50),
                netIncome : this.state.annualSalary - this.state.incomeTax
              }); 
          }
        //this.setState({annualSalary : e.target.value});
    }

    superHandler = (e) => {
        if (e.target.validity.valid) {
            var sup = +(e.target.value)
            //var iT = this.state.interestRate
            this.setState({
                superm: sup,
                superRate : this.state.netIncome * this.state.superm
              }); 
          }
        //this.setState({super : e.target.value});
    }

    
    dateHandler = (e) => {
        this.setState({date : e.target.value});
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        var sup = this.state.superm
        //var iT = this.state.incomeTax
        this.setState({
            //showPayslip : true
            totals : this.state.netIncome - this.state.superRate
        })
    }

    componentDidMount () {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if(localStorage.getItem('user')){
            this.setState({
                firstName :this.userData.firstName,
                lastName :this.userData.lastName,
                annualSalary :this.userData.annualSalary,
                superm :this.userData.superm,
                date :this.userData.date,

            })
        }else{
            this.setState({
                firstName :'',
                lastName :'',
                annualSalary : '',
                superm : '',
                date : ''
            })
        }
    }

    componentDidUpdate (nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    resetHandler = () =>{
        this.setState({
            firstName :'',
            lastName :'',
            annualSalary : '',
            superm : '',
            date : ''
        })
    }

    render () {
        const { showing } = this.state;
        return(
            <div className={styles.payslipForm}>
                <h3>Employee Monthly Payslip</h3>
                    <Card>
                        <form onSubmit = {this.onSubmitHandler} >
                            <div className={styles.formControl}>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" className="form-control" name="firstname" placeholder="FirstName" required value={this.state.firstName} onChange={this.firstNameHandler}/>
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" className="form-control" name="lastname" placeholder="LastName" required value={this.state.lastName} onChange={this.lastNameHandler}/>
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="salary">Annual Salary</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                        <input type="text" className="form-control" id="anSal" placeholder = "AnnualSalary" aria-label="Amount (to the nearest dollar)" value={this.state.annualSalary} onChange={this.annualSalaryHandler}/>
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
                                        <input type="text" className="form-control" placeholder = "Super" value={this.state.superm} onChange={this.superHandler}/>
                                </div>
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="date">Month</label>
                                <div className ="input-group">
                                    <div className="input-group-prepend">
									    <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-calendar-check"></i></span>
								    </div>
                                        <input type="text" className="form-control datepicker" id="validationCustomUsername" placeholder="March" aria-describedby="inputGroupPrepend"  value={this.state.date} onChange={this.dateHandler}/>
                                 </div>       
                            </div>
                            <Button btnType= "GeneratePayslip" clicked ={() => this.setState({ showing: !showing })}> Generate Payslip</Button>
                            <Button btnType= "Reset" clicked ={this.resetHandler}> Reset </Button>
                        </form>
               
                    </Card>
                { showing ?
                    <Card>
                        
                        <section id="invoice" className="py-5">
                                <div className="container">
                                    <div className="card">
                                        <div className="card-header bg-primary text-white border-0">
                                            Month  : <strong>{this.state.date}</strong> 
                                        </div>
                                        <div className="card-body">
                                            <div className="row mb-4">
                                                <div className="col-sm-6">
                                                    <h6 className="mb-3">From:</h6>
                                                        <div>
                                                            <strong>Akshar Vijay</strong>
                                                        </div>
                                                        <div>13 B Unit 1, Maioro Street, New Windsor</div>
                                                            <div>Auckland</div>
                                                            <div>Email: <a href="mailto:aksharvij@gmail.com">aksharvij@gmail.com</a></div>
                                                            <div>Phone: +64 223514717</div>
                                                        </div>
                                   
                                                        <div className="col-sm-6">
                                                            <h6 className="mb-3">To:</h6>
                                                            <div>
                                                                <strong>{this.state.firstName}</strong>
                                                            </div>
                                                            <div>13 B Unit 1, Maioro Street, New Windsor</div>
                                                               <div>Auckland</div>
                                                               <div>Email: <a href="mailto:aksharvij@gmail.com">aksharvij@gmail.com</a></div>
                                                               <div>Phone: +64 223514717</div>
                                                           </div>
                                                       </div>
                                                       <div className="table-responsive-sm">
                                                            <table className="table table-striped">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="left">
                                                                            <strong>Gross Income</strong>
                                                                        </td>
                                                                           <td className="right"><i className="fas fa-dollar-sign"></i> {this.state.annualSalary}</td>
                                                                       </tr>
                                                                        <tr>
                                                                           <td className="left">
                                                                               <strong>Income Tax</strong>
                                                                           </td>
                                                                           <td className="right"><i className="fas fa-dollar-sign"></i> {this.state.incomeTax}</td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td className="left">
                                                                               <strong>Net Income</strong>
                                                                           </td>
        <td className="right"><i className="fas fa-dollar-sign"></i> {this.state.netIncome}</td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td className="left">
                                                                               <strong>Super Rate</strong>
                                                                           </td>
                                                                           <td className="right"><i className="fas fa-dollar-sign"></i> {this.state.superRate} </td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td className="left">
                                                                               <strong>Total Amount Payble</strong>
                                                                           </td>
                                                                           <td className="right text-success">
                                                                               <strong><i className="fas fa-dollar-sign"></i> {this.state.totals} </strong>
                                                                           </td>
                                                                       </tr>
                                                                   </tbody>
                                                               </table>
                                                       </div>
                                   
                                                   </div>
                                               </div>
                                           </div>
                            </section>

            
                        </Card> :null }

          

            </div>
        );
    }
}

export default PayslipForm;
