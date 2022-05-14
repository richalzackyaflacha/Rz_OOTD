import React from "react";
import { useNavigate } from 'react-router-dom';

// Add CSS
import "../../style/container/error.css";
import "../../index.css";

function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="error">
            <div className="error-content">
                <h1>ERROR!!</h1>

                <p>Halaman Tidak Dapat Ditemukan</p>

                <button onClick={() => navigate(-1)}>Kembali</button>
            </div>
        </div>
    );
};

export default ErrorPage;