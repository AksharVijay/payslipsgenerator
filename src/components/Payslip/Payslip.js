import React, { Component } from 'react';
import Card from '../UI/Card/Card';
//import Pay from '../Pay/Pay';
import axios from 'axios';
// import Spinner from '../UI/Spinner/Spinner';

class Payslip extends Component {
    state = {
        payslips : []
        // loading : false
    }

    componentDidMount () {
    axios.get('https://payslip-c3443.firebaseio.com/payslips')
        //axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const payslips = response.data
                this.setState({payslips});
                console.log(response);
            })  
            .catch(error => {
                console.log(error);
              });
    }

    render(){
        // const payslips =this.state.payslips.map(pay =>{
        //     return <Pay firstname={pay.firstname}/>;
        // });

        // let pay  =  (
        //     <React.Fragment>
        //         <Pay payslips = {this.state.payslips}/>
        //     </React.Fragment>);

        // if(this.state.loading) {
        //      pay = <Spinner/>;
        // }

        return(
            <div>
                {/* {pay} */}

                        <Card>
                        {
                    Array.isArray(this.state.payslips) ? this.state.payslips.map((paysl) =>(
                        <section id="invoice" className="py-5">
                                <div className="container">
                                    <div className="card">
                                        <div className="card-header bg-primary text-white border-0">
                                            Month  : <strong>September 2020</strong> 
                                        </div>
                                        <div className="card-body">
                                            <div className="row mb-4">
                                                <div className="col-sm-6">
                                                    <h6 className="mb-3">To:</h6>
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
                                                                <strong>{paysl.firstname}</strong>
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
                                                                           <td className="right"><i className="fas fa-dollar-sign"></i> {paysl.grossincome}</td>
                                                                       </tr>
                                                                        <tr>
                                                                           <td className="left">
                                                                               <strong>Income Tax</strong>
                                                                           </td>
                                                                           <td className="right"><i className="fas fa-dollar-sign"></i> {paysl.incometax}</td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td className="left">
                                                                               <strong>Net Income</strong>
                                                                           </td>
                                                                           <td className="right"><i className="fas fa-dollar-sign"></i> {paysl.netincome}</td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td className="left">
                                                                               <strong>Super Rate</strong>
                                                                           </td>
                                                                           <td className="right"><i className="fas fa-dollar-sign"></i> {paysl.super}</td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td className="left">
                                                                               <strong>Total Amount Payble</strong>
                                                                           </td>
                                                                           <td className="right text-success">
                                                                               <strong><i className="fas fa-dollar-sign"></i> {paysl.total}</strong>
                                                                           </td>
                                                                       </tr>
                                                                   </tbody>
                                                               </table>
                                                       </div>
                                   
                                                   </div>
                                               </div>
                                           </div>
                            </section>
                                                )) : (
                                                    "No news found"
                                                   )
                                            }
            
                        </Card>

            </div>
        );
    }

}

export default Payslip;