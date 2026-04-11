import { Outlet } from 'react-router-dom';
import { InformationCard } from '../../componentExports';
import './dashboard.css';


const mainCards = [
  {
    icon: <i className="fa-solid fa-cube"></i>,
    title: 'Products',
    information: 2750,
    identifier: '1'
  },
  {
    icon: <i className="fa-solid fa-cart-arrow-down"></i>,
    title: 'Orders',
    information: 1024,
    identifier: '2'
  },
  {
    icon: <i className="fa-solid fa-table-cells-large"></i>,
    title: 'Categories',
    information: 541,
    identifier: '3'
  },
  {
    icon: <i className="fa-solid fa-hand-holding-hand"></i>,
    title: 'Providers',
    information: 120,
    identifier: '4'
  },

]

const Dashboard = () => {
  return (
    <>
    <main className="dashboard">
      <div className='cards-container'>
        <InformationCard data={mainCards[0]}></InformationCard>
        <InformationCard data={mainCards[1]}></InformationCard>
        <InformationCard data={mainCards[2]}></InformationCard>
        <InformationCard data={mainCards[3]}></InformationCard>
      </div>
      </main>
    <Outlet/>
    </>
  )
}

export default Dashboard;