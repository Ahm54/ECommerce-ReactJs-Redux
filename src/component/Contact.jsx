import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

    const Send= ()=>{
        alert('Bilgileriniz başarıyla alındı.');
        navigate('/');
    }
    
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img 
                        src="@/public/assets/moto.jpg" 
                        alt="Background img" 
                        style={{ height: '100%', width: '100%', maxHeight: '300px', border: '4px solid black' }} 
                    />
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label className='form-label'>Email Address</label>
                        <input type="email" placeholder='name@example.com' className='form-control mb-3' />

                        <label className='form-label'>Name Surname</label>
                        <input type="text" placeholder='John Doe' className='form-control mb-3' />

                        <label className='form-label'>Phone Number</label>
                        <input type="tel" placeholder='055*******' className='form-control mb-3' />
                    </div>
                    <div className="text-center">
                        <button className='btn btn-outline-dark' onClick={Send}>Gönder</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;