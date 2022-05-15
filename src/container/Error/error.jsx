import React from "react";
import { Link, useNavigate } from 'react-router-dom';

// Add CSS
import "../../style/container/error.css";
import "../../index.css";

function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="error">
            <div className="error-content">
                <h1>ERROR!!</h1>
                {/* onClick={() => navigate(-1)} */}
                <p>Halaman Tidak Dapat Ditemukan</p>

                <Link to="/"><button>Kembali</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;