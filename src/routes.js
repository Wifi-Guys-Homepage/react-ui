import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';

import AboutMe from './pages/aboutMe';
import AboutMePersonal from './pages/aboutMe_personal';
import AboutMeProfessional from './pages/aboutMe_professional';
import Appinfo from './pages/appinfo';
import CV from './pages/cv';
import Design from './pages/design';

import EditProfile from './pages/editProfile';
import Login from './pages/login';
import Register from './pages/register';
import SkillSets from './pages/skillSets';

const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route exact path = "/about_me" component = {AboutMe} />
            <Route exact path = "/about_me/personal" component = {AboutMePersonal} />
            <Route exact path = "/about_me/professional" component = {AboutMeProfessional} />
            <Route exact path = "/appinfo" component = {Appinfo} />
            <Route exact path = "/cv" component = {CV} />
            <Route exact path = "/design" component = {Design} />
            <Route exact path = "/edit_profile" component = {EditProfile} />
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/skill_sets" component = {SkillSets} />

        </Router>
    );
};export default Webpages;