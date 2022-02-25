import React from 'react';

//Components
import Principal from './Containers/PrincipalContainer/PrincipalContainer';
import Footer from './Common/Footer/Footer';

//Styles
import './PrincipalPage.scss';

const PrincipalPage = () => {
    return (
        <div id="principal-page">
            <main className="upload-wishlist">
                <Principal />
            </main>
            <Footer />
        </div>
    );
};

export default PrincipalPage;
