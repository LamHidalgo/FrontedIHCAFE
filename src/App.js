import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Atlas from "./pages/Atlas";
import AtlasAccount from "./pages/AtlasAccount";

import listBudgets from "./components/listBudgets";
import Navbar from "./components/Navbar";
import projectDashboard from "./pages/ProjectDashboard";
import BudgetNew from "./pages/BudgetNew";
import BudgetEdit from "./pages/BudgetEdit";
import ListProjects from "./pages/ListProjects";
import ProjectNew from "./pages/ProjectNew";
import ListCategories from "./pages/ListCategories";
import BudgetLineNew from "./pages/BudgetLineNew";

import pageSupplierslist from "./pages/Suppliers_list";
import Users_list from "./pages/Users_list";
import Teams_list from "./pages/Teams_list";
import Teams_New from './pages/TeamNew';
import TeamMembers from './pages/TeamMembers'
import Roles from './pages/Roles'

import Account_list from "./pages/Accounts";
import Account_new from "./pages/AccountNew";
import AccountDashboard from "./pages/AccountDashboard";

import Reports from "./pages/Reports";
import ReportsUsers from './pages/reports/ReportsUsers'
import ReportAtlasByProjectid from './pages/reports/ReportAtlasByProjectid'

import Coinlist from './pages/Coinlist'
import CoinNew from './pages/CoinNew'
import ConversionList from './pages/Conversions'

import Login from './pages/Login'
import Inicio from './pages/Inicio'
import Dasboard from './pages/Dasboard'

function App() {
  return (

    <div className="App">

      <Router>

        <Navbar />

        <Sidebar />

        <Route exact path="/" component={Inicio} />
        <Route exact path="/dashboard" component={Dasboard} />

        <Route path="/login" exact component={Login} />

        <Route path="/atlas" exact component={Atlas} />
        <Route path="/atlas_accounts" exact component={AtlasAccount} />
        <Route path="/budgets" exact component={listBudgets} />
        <Route path="/budgets/new" exact component={BudgetNew} />
        <Route path="/budgets/edit/:id" exact component={BudgetEdit} />
        <Route path="/budgetline/new" exact component={BudgetLineNew} />
        <Route path="/categories" exact component={ListCategories} />
        <Route path="/projects" exact component={ListProjects} />
        <Route path="/projects/new" exact component={ProjectNew} />
        <Route path="/project/:id" exact component={projectDashboard} />

        <Route path="/suppliers_list" exact component={pageSupplierslist} />
        <Route path="/users_list" exact component={Users_list} />
        <Route path="/teams_list" exact component={Teams_list} />
        <Route path="/teams_new" exact component={Teams_New} />
        <Route path="/teammembers/:id" exact component={TeamMembers} />
        <Route path="/roles_list" exact component={Roles} />
        <Route path="/coins" exact component={Coinlist} />
        <Route path="/coin_new" exact component={CoinNew} />
        <Route path="/conversions/:id" exact component={ConversionList} />

        <Route path="/accounts" exact component={Account_list} />
        <Route path="/account_new" exact component={Account_new} />
        <Route path="/account/:id" exact component={AccountDashboard} />

        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/excel_users" exact component={ReportsUsers} />
        <Route path="/reports/atlas_by_project_id/:id/:coin_id" exact component={ReportAtlasByProjectid} />

      </Router>
    </div>
  );
}

export default App;
