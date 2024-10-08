import { useContext, useEffect, useRef, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { INITAL_URL } from '../utils/Constants';
import { ListAnimals } from '../pages/ListAnimals';
import { PublishPets } from '../pages/PublishPets';
import { Login } from '../pages/Login';
import { Donate } from '../pages/Donate';
import { AdoptionReport } from '../pages/AdoptionReport';
import { GenerateRequestGuardian } from '../pages/GenerateRequestGuardian';
import { GenerateRequestAdoption } from '../pages/GenerateRequestAdoption';
import { RegisterUser } from '../pages/RegisterUser';
const ContentRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} /> {/* Carga Login en la ruta raíz */}
                    <Route path="login" element={<Login />} />
                    <Route path="register-user" element={<RegisterUser />} />
                    <Route path="publish-pets" element={<PublishPets />} />
                    <Route path="list-pets" element={<ListAnimals />} />
                    <Route path="generate-request-adoption" element={<GenerateRequestAdoption />} />
                    <Route path="donate" element={<Donate />} />
                    <Route path="adoption-report" element={<AdoptionReport />} />
                    <Route path="generate-request-guardian" element={<GenerateRequestGuardian />} />
                    <Route path="*" element={<Login />} />
                </Route>
            </Routes>
        </>
    );
}

export {
    ContentRouter
};