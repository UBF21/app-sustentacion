import { useContext, useEffect, useRef, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { INITAL_URL } from '../utils/Constants';
import { ListAnimals } from '../pages/ListAnimals';
import { ApplyAdaptation } from '../pages/ApplyAdaptation';
import { PublishPets } from '../pages/PublishPets';
import { Login } from '../pages/Login';
import { Donate } from '../pages/Donate';
import { AdoptionReport } from '../pages/AdoptionReport';
const ContentRouter = () => {
    return (
        <>
            <Routes>
                <Route path={`${INITAL_URL}`}>
                    <Route path=""  Component={Login}/>
                    <Route path="login"  Component={Login}/>
                    <Route path="publish-pets"  Component={PublishPets}/>
                    <Route path="list-pets" Component={ListAnimals} />
                    <Route path="apply-adaptation" Component={ApplyAdaptation}/>
                    <Route path="donate" Component={Donate}/>
                    <Route path="adoption-report" Component={AdoptionReport}/>
                    <Route path="*" Component={Login}/>
                </Route>
            </Routes>
        </>
    );
}

export {
    ContentRouter
};