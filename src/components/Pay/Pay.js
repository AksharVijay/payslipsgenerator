import React from 'react';
import Card from '../UI/Card/Card';

const Pay = (props) =>{
    return(
        <div>
            <Card>
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
                                                    <strong>{props.firstname}</strong>
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
                                                               <td className="right"><i className="fas fa-dollar-sign"></i> {props.grossincome}</td>
                                                           </tr>
                                                            <tr>
                                                               <td className="left">
                                                                   <strong>Income Tax</strong>
                                                               </td>
                                                               <td className="right"><i className="fas fa-dollar-sign"></i> {props.incometax}</td>
                                                           </tr>
                                                           <tr>
                                                               <td className="left">
                                                                   <strong>Net Income</strong>
                                                               </td>
                                                               <td className="right"><i className="fas fa-dollar-sign"></i> {props.netincome}</td>
                                                           </tr>
                                                           <tr>
                                                               <td className="left">
                                                                   <strong>Super Rate</strong>
                                                               </td>
                                                               <td className="right"><i className="fas fa-dollar-sign"></i> {props.super}</td>
                                                           </tr>
                                                           <tr>
                                                               <td className="left">
                                                                   <strong>Total Amount Payble</strong>
                                                               </td>
                                                               <td className="right text-success">
                                                                   <strong><i className="fas fa-dollar-sign"></i> {props.total}</strong>
                                                               </td>
                                                           </tr>
                                                       </tbody>
                                                   </table>
                                           </div>
                       
                                       </div>
                                   </div>
                               </div>
                </section>

            </Card>
        </div>
    );
}

export default Pay;