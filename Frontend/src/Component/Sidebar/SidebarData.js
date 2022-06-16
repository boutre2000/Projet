import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as ImIcons from 'react-icons/im';
import * as RiIcons from 'react-icons/ri';


const style={
  color: '#2D3436',
  paddingRight: '13px',
  width: '21px',
  height: '21px',
}
const styletitle={
  position: 'absolute',
  left: '197px',
  top: '5px',
  width: '15px',
  height: '18px',
  fontSize: '16px',
  opacity: 1
}
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaIcons.FaChevronDown  style={styletitle}/>,
    cName: 'nav-title'
  },
  {
    title: 'Tableau de bord',
    path: '/',
    icon: <ImIcons.ImStatsDots style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Lorem ipsum',
    path: '/',
    icon: <RiIcons.RiBubbleChartLine style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Employé',
    path: '/',
    icon: <FaIcons.FaChevronDown style={styletitle} />,
    cName: 'nav-title'
  },
  {
    title: 'Liste des employés',
    path: '/',
    icon: <FiIcons.FiUsers style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Départements',
    path: '/reports',
    icon: <MdIcons.MdOutlineHomeWork style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Postes',
    path: '/products',
    icon: <BiIcons.BiBriefcaseAlt style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Contrats',
    path: '/team',
    icon: <RiIcons.RiNewspaperLine  style={style}/>,
    cName: 'nav-text'
  },
  {
    title: 'Présences',
    path: '/support',
    icon: <MdIcons.MdCalendarToday style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Absences',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Congés',
    path: '/conge',
    icon: <RiIcons.RiOpenArmLine style={style} />,
    cName: 'nav-text'
  }
];