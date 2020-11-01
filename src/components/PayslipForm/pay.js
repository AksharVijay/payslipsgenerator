// import React, {Component} from 'react';
// import Card from '../UI/Card/Card';
// import styles from './PayslipForm.module.css';
// import './payslip.css';
// import Button from '../UI/Button/Button';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// // import $ from 'jquery';

// class PayslipForm extends Component {

//     userData;

//     state = {
//         firstName :'',
//         lastName  :'',
//         address :'',
//         email : '',
//         phone :'',
//         annualSalary :'',
//         superm : '',
//         grossIncome:'',
//         incomeTax : '',
//         netIncome :'',
//         superRate :'',
//         totals : '',
//         errors : [],
//         showing : false,
//         loading : false,
//         date: null
//     }

//     hasError(key) {
//         return this.state.errors.indexOf(key) !== -1;
//       }
    
//     firstNameHandler = (e) => {
//         let key = e.target.name;
//         let value = e.target.value;
//         let obj = {};
//         obj[key] = value;
//         this.setState(obj);
//     }

//     lastNameHandler = (e) => {
//         let key = e.target.name;
//         let value = e.target.value;
//         let obj = {};
//         obj[key] = value;
//         this.setState(obj);
//     }

//     addressHandler = (e) => {
//         let key = e.target.name;
//         let value = e.target.value;
//         let obj = {};
//         obj[key] = value;
//         this.setState(obj);
//     }

//     emailHandler = (e) => {
//         let key = e.target.name;
//         let value = e.target.value;
//         let obj = {};
//         obj[key] = value;
//         this.setState(obj);
//     }

//     phoneHandler = (e) => {
//         // this.setState({phone : e.target.value});
//         let key = e.target.name;
//        let value = e.target.value;
//         let obj = {};
//         obj[key] = value;
//         this.setState(obj);
//     }
    
//     annualSalaryHandler = (e) => {
//         if (e.target.validity.valid) {
//             let anSal = +(e.target.value)
//             let key = e.target.name;
//             let value = e.target.value;
//             let obj = {};
//             obj[key] = value;
//             this.setState({
//                 annualSalary: anSal,
//                 grossIncome : (this.state.annualSalary) / 12,
//                 incomeTax : (3572 + (this.state.annualSalary - 37000) * 0.325)/12,
//                 // renderSwitch(incomeTax){
//                 //     switch(incomeTax){
//                 //         case this.state.annualSalary > 0 && this.state.annualSalary<= 18200 :
//                 //             return (this.state.annualSalary)/12 ;
//                 //         case this.state.annualSalary > 18201 && this.state.annualSalary<= 37000 :
//                 //             return (1200 + (this.state.annualSalary - 18200) * 0.19)/12 ;
//                 //         case this.state.annualSalary > 37001 && this.state.annualSalary<= 80000 :
//                 //             return (3572 + (this.state.annualSalary - 37000) * 0.325)/12 ;
//                 //         case this.state.annualSalary > 80001 && this.state.annualSalary<= 180000 :
//                 //             return (17547 + (this.state.annualSalary - 80000) * 0.37)/12 ;
//                 //         case this.state.annualSalary >= 180001 :
//                 //             return (54547 + (this.state.annualSalary - 180000) * 0.45)/12 ;
//                 //         default :
//                 //             return (this.state.annualSalary)/12;
//                 //     }
//                 // },

//                 netIncome : (this.state.grossIncome) - (this.state.incomeTax),
//                 obj
//               }); 
//           }
//     }

//     superHandler = (e) => {
//         if (e.target.validity.valid) {
//             let sup = +(e.target.value)
//             let key = e.target.name;
//             let value = e.target.value;
//             let obj = {};
//             obj[key] = value;
//             this.setState({
//                 superm: sup,
//                 superRate : (this.state.netIncome) * (this.state.superm),
//                 obj
//               }); 
//           }
//     }

    
//     dateHandler = (e) => {
//         let key = e.target.name;
//         let value = e.target.value;
//         let obj = {};
//         obj[key] = value;
//         this.setState( { obj});
//     }

//     onbeforeunload = function (e) {
//         localStorage.clear();
//     };

//     onSubmitHandler = (e) => {
//         e.preventDefault();
//         let sup = this.state.superm;
//             //VALIDATE
//             let errors = [];

//             //firstname
//             if (this.state.firstName === "") {
//                 errors.push("firstName");
//                 }
//             //lastname
//             if (this.state.lastName === "") {
//                 errors.push("lastName");
//                 }
//             //address
//             if (this.state.address === "") {
//                 errors.push("address");
//                 }
//             //email
//             const expression = /\S+@\S+/;
//             let validEmail = expression.test(String(this.state.email).toLowerCase());

//             if (!validEmail) {
//             errors.push("email");
//             }
//             //phone
//             if (this.state.phone === "") {
//                 errors.push("phone");
//             }
//             //annualSalary
//             if (this.state.annualSalary === "") {
//                 errors.push("annualSalary");
//             }
//             //superm
//             if (this.state.superm === "") {
//                 errors.push("superm");
//             }
//             //date
//             // if (this.state.date === "") {
//             //     errors.push("date");
//             // }

//             this.setState({
//             errors: errors,
//             totals : (this.state.netIncome) - (this.state.superRate)
//             });
//             if (errors.length > 0) {
//                 return false;
//               } else {
//                 alert("everything good. submit form!");
//               }

//     }



//     componentDidMount () {
//         this.userData = JSON.parse(localStorage.getItem('user'));
//         if(localStorage.getItem('user')){
//             this.setState({
//                 firstName :this.userData.firstName,
//                 lastName :this.userData.lastName,
//                 annualSalary :this.userData.annualSalary,
//                 superm :this.userData.superm,
//                 date :this.userData.date,

//             })
//         }else{
//                 this.setState({
//                     firstName :'',
//                     lastName :'',
//                     annualSalary : '',
//                     superm : '',
//                     date : ''
//                 })
//             }
//     }



//     componentDidUpdate (nextProps, nextState) {
//         localStorage.setItem('user', JSON.stringify(nextState));
//         window.localStorage.removeItem("user");
//     }

//     resetHandler = () =>{
//         this.setState({
//             firstName :'',
//             lastName :'',
//             address :'',
//             email :'',
//             phone:'',
//             annualSalary : '',
//             superm : '',
//             date : ''
//         })
//     }

//     render () {
//         const { showing } = this.state;
//         return(
//             <div className={styles.payslipForm}>
//                 <h3>Employee Monthly Payslip</h3>
//                     <Card>
//                         <div className={styles.taxinfo}>
//                       <h6> Tax information <span className={styles.tooltip}> <i className="fas fa-info-circle"></i><span className={styles.tooltiptext}><table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Taxable Income</th>
//       <th scope="col">Tax on Income</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>$0 - $18200</td>
//       <td>no tax applicable</td>
//     </tr>
//     <tr>
//       <td>$18201 - $37000</td>
//       <td>19c for each $1 over $18200</td>
//     </tr>
//     <tr>
//       <td>$37001 - $80000</td>
//       <td>32c for each $1 over $37000</td>
//     </tr>
//     <tr>
//         <td>$80001 - $180000</td>
//       <td>37c for each $1 over 180000</td>
//     </tr>
//     <tr>
//       <td>$180001 and over</td>
//       <td>45c for each $1 over $180000</td>
//     </tr>
//   </tbody>
// </table></span></span></h6>
//                         </div>
//                         <form onSubmit = {this.onSubmitHandler} >
//                             <div className={styles.formControl}>
//                                 <label htmlFor="firstName" >First Name</label>
//                                 <input autoComplete="off" type="text" className={ this.hasError("firstName") ? "form-control is-invalid" : "form-control" } name="firstName" placeholder="First Name"  value={this.state.firstName} onChange={this.firstNameHandler} />
//                                 <div className={ this.hasError("firstName") ? "inline-errormsg" : "hidden" } > Please enter your first name </div>
//                             </div>
//                             <div className={styles.formControl}>
//                                 <label htmlFor="lastName">Last Name</label>
//                                 <input autoComplete="off" type="text" className={ this.hasError("lastName") ? "form-control is-invalid" : "form-control" } name="lastName" placeholder="Last Name" required="" value={this.state.lastName} onChange={this.lastNameHandler}/>
//                                 <div className={ this.hasError("lastName") ? "inline-errormsg" : "hidden" } > Please enter your last name </div>
//                             </div>
//                             <div className={styles.formControl}>
//                                 <label htmlFor="address">Address</label>
//                                 <input autoComplete="off"  type="text" className={ this.hasError("address") ? "form-control is-invalid" : "form-control" } name="address" placeholder="Please enter your address" required="" value={this.state.address} onChange={this.addressHandler}/>
//                                 <div className={ this.hasError("address") ? "inline-errormsg" : "hidden" } > Please enter the address </div>
//                             </div>
//                             <div className={styles.formControl}>
//                                 <label htmlFor="email">Email</label>
//                                 <input autoComplete="off" type="text" className={ this.hasError("email") ? "form-control is-invalid" : "form-control" } name="email" placeholder="Please enter your email" required="" value={this.state.email} onChange={this.emailHandler}/>
//                                 <div className={ this.hasError("email") ? "inline-errormsg" : "hidden" } > Please enter a valid email</div>
//                             </div>
//                             <div className={styles.formControl}>
//                                 <label htmlFor="phone">Phone</label>
//                                 <input  autoComplete="off" type="number" className={ this.hasError("phone") ? "form-control is-invalid" : "form-control" } pattern="[0-9]*" inputmode="numeric" name="phone" placeholder="Please enter your phone number" required="" value={this.state.phone} onChange={this.phoneHandler}/>
//                                 <div className={ this.hasError("phone") ? "inline-errormsg" : "hidden" } > Please enter a valid phone number </div>
//                             </div>
//                             <div className={styles.formControl}>
//                                 <label htmlFor="annualSalary">Annual Salary</label>
//                                 <div className="input-group">
//                                     <div className="input-group-prepend">
//                                         <span className="input-group-text">$</span>
//                                     </div>
//                                         <input autoComplete="off" type="number" className={ this.hasError("annualSalary") ? "form-control is-invalid" : "form-control" } pattern="[0-9]*" inputmode="numeric" id="annualSalary" placeholder = "Annual Salary"  value={this.state.annualSalary} onChange={this.annualSalaryHandler}/>
//                                     <div className="input-group-append">
//                                         <span className="input-group-text">.00</span>
//                                     </div>
//                                 </div>
//                                 <div className={ this.hasError("annualSalary") ? "inline-errormsg" : "hidden" } > Please enter numbers only </div>
//                             </div>
//                             <div className={styles.formControl}>
//                                 <label htmlFor="superm">Super Rate </label>
//                                 <div className="input-group">
//                                     <div className="input-group-prepend">
//                                         <span className="input-group-text">%</span>
//                                     </div>
//                                         <input autoComplete="off" type="text" className={ this.hasError("superm") ? "form-control is-invalid" : "form-control" } pattern="[0-9]*" inputmode="numeric" name="superm" placeholder = "Super Rate" value={this.state.superm} onChange={this.superHandler}/>
//                                     </div>
//                                     <div className={ this.hasError("superm") ? "inline-errormsg" : "hidden" } > Please enter number only </div>
//                             </div>

//                              {/* <div className={styles.formControl}>
//                                 <label htmlFor="date" >Month</label>
//                                     <div className ="input-group">
//                                         <div className="input-group-prepend"> 
// 									        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-calendar-check"></i></span>
// 								        </div>
                               
//                                        <select  className={ this.hasError("date") ? "form-control is-invalid browser-default custom-select" : "form-control" } name="date"  value={this.state.date} onChange={this.dateHandler}>
//   <option defaultValue>Select the month</option>
//   <option value="January">January 2020</option>
//   <option value="February">February 2020</option>
//   <option value="March">March 2020</option>
//   <option value="April">April 2020</option>
//   <option value="May">May 2020</option>
//   <option value="June">June 2020</option>
//   <option value="July">July 2020</option>
//   <option value="August">August 2020</option>
//   <option value="September">September 2020</option>
//   <option value="October">October 2020</option>
//   <option value="November">November 2020</option>
//   <option value="December">December 2020</option>
// </select> 
//      <DatePicker  className={ this.hasError("date") ? "form-control is-invalid" : "form-control" } selected={this.state.date} onChange={this.dateHandler}/> 
//  <input autoComplete="off" type="text" className={ this.hasError("date") ? "form-control is-invalid" : "form-control" } name="date" placeholder="Month and Year"  value={this.state.date} onChange={this.dateHandler} />  
//                                     </div>
//                                 <div className={ this.hasError("date") ? "inline-errormsg" : "hidden" } > Please select the month </div>
//                             </div>  */}
//                             {/* <DatePicker className={ this.hasError("date") ? "form-control is-invalid" : "form-control" } selected={this.state.date} onChange={this.dateHandler}/> */}
//                             <Button btnType= "GeneratePayslip" clicked ={() => (this.state.date) === '' ? null : this.setState({showing : true})}> Generate Payslip</Button> 
//                             <Button btnType= "Reset" clicked ={this.resetHandler}> Reset </Button>
//                         </form>
               
//                     </Card>
//                     { showing ?
//                     <Card>
                        
//                         <section id="invoice" className="py-5">
//                                 <div className="container">
//                                     <div className="card">
//                                         <div className="card-header bg-primary text-white border-0">
//                                             Month  : <strong>{this.state.date}</strong> 
//                                         </div>
//                                         <div className="card-body">
//                                             <div className="row mb-4">
//                                                 <div className="col-sm-6">
//                                                     <h6 className="mb-3">From:</h6>
//                                                         <div>
//                                                             <strong>Akshar Vijay</strong>
//                                                         </div>
//                                                         <div>13 B Unit 1, Maioro Street, New Windsor, Auckland</div>
//                                                             <div>Email: aksharvij@gmail.com </div>
//                                                             <div>Phone: +64 223514717</div>
//                                                         </div>
                                   
//                                                         <div className="col-sm-6">
//                                                             <h6 className="mb-3">To:</h6>
//                                                             <div>
//                                                                 <strong>{this.state.firstName}</strong>
//                                                             </div>
//                                                             <div>{this.state.address}</div>
//                                                                <div>Email: {this.state.email}</div>
//                                                                <div>Phone: {this.state.phone}</div>
//                                                            </div>
//                                                        </div>
//                                                        <div className="table-responsive-sm">
//                                                             <table className="table table-striped">
//                                                                 <tbody>
//                                                                     <tr>
//                                                                         <td className="left">
//                                                                             <strong>Gross Income</strong>
//                                                                         </td>
//                                                                            <td className="right"><i className="fas fa-dollar-sign"></i> {this.state.grossIncome}</td>
//                                                                        </tr>
//                                                                         <tr>
//                                                                            <td className="left">
//                                                                                <strong>Income Tax</strong>
//                                                                            </td>
//                                                                            <td className="right"><i className="fas fa-dollar-sign"></i> {this.state.incomeTax}</td>
//                                                                        </tr>
//                                                                        <tr>
//                                                                            <td className="left">
//                                                                                <strong>Net Income</strong>
//                                                                            </td>
//                                                                             <td className="right"><i className="fas fa-dollar-sign"></i> {this.state.netIncome}</td>
//                                                                        </tr>
//                                                                        <tr>
//                                                                            <td className="left">
//                                                                                <strong>Super Rate</strong>
//                                                                            </td>
//                                                                            <td className="right"><i className="fas fa-dollar-sign"></i> {this.state.superRate} </td>
//                                                                        </tr>
//                                                                        <tr>
//                                                                            <td className="left">
//                                                                                <strong>Total Amount Payble</strong>
//                                                                            </td>
//                                                                            <td className="right text-success">
//                                                                                <strong><i className="fas fa-dollar-sign"></i> {this.state.totals} </strong>
//                                                                            </td>
//                                                                        </tr>
//                                                                    </tbody>
//                                                                </table>
//                                                        </div>
                                   
//                                                    </div>
//                                                </div>
//                                            </div>
//                             </section>

            
//                         </Card> : null }

//             </div>
//         );
//     }
// }

// export default PayslipForm;
