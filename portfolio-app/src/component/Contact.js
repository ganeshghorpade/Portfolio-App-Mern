    import React from "react";
    import img from './contact.png';
    //import { useNavigate } from "react-router-dom";
    const Contact = ()=>{
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [phone,setPhone] = React.useState('');
    const [message,setMessage] = React.useState('');
    




        const startMessage = async()=>{
          console.log(name,email,phone,message)
          let result = await fetch("http://localhost:7000/send",{
            method : "post",
            body : JSON.stringify({name,email,phone,message}),
            headers : {
              "Content-Type":"application/json"
            }
          });
          result = await result.json();
          console.log(result);
        }


        return(
            <>
            <div className="main-box">
            <div className="container-fluid cont-box">
            <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="a95738cc-3b0f-4150-844b-0094a06d00e0"/>
                <div className="row">
                <h2 className="text-center  mt-5 fw-bold c-headline">Send Me Message</h2>
                    <div className="col col-lg-6 col-sm-12 col-12  text-center main-box t ">
                    <div><img src={img} alt="" className="img-fluid c"></img></div>
                    </div>
                    <div className="col col-lg-6 col-sm-12 col-12  t main-box">
                        <div className="row con-box-in">
                        
      <div className="mb-3">
        <input type="text"  name="FullName" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} id="exampleInputFullname1" aria-describedby="FullnameHelp" placeholder="FullName"/>
      </div>

      <div className="mb-3">
        <input type="email"  name="Email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
        
      </div>
      <div className="mb-3">
        <input type="text"  name="Phone Number" className="form-control" value={phone} onChange={(e)=>{setPhone(e.target.value)}} id="exampleInputPhone1" placeholder="Phone Number"/>
      </div>
      <div className="mb-3">
        <textarea type="text"  name="Message" className="form-control" value={message} onChange={(e)=>{setMessage(e.target.value)}} id="exampleInputMessage1" placeholder="Message"/>
      </div>
      <button  onClick={startMessage} className="btn-dark c-btn">Submit</button>
    

                        </div>
                    </div>
                </div>
              </form>
            </div>
        </div>
            
            </>
        )
    }

    export default Contact;

