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
    title: 'Employé',
    path: '/',
    icon: <FaIcons.FaChevronDown style={styletitle} />,
    cName: 'nav-title'
  },
  {
    title: 'Liste des employés',
    path: '/ListEmp',
    icon: <FiIcons.FiUsers style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Départements',
    path: '/ListDep',
    icon: <MdIcons.MdOutlineHomeWork style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Postes',
    path: '/ListPost',
    icon: <BiIcons.BiBriefcaseAlt style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Contrats',
    path: '/ListCont',
    icon: <RiIcons.RiNewspaperLine  style={style}/>,
    cName: 'nav-text'
  },
  {
    title: 'Assiduités',
    path: '/listpres',
    icon: <RiIcons.RiFingerprintLine style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Demandes',
    path: '/',
    icon: <FaIcons.FaChevronDown  style={styletitle}/>,
    cName: 'nav-title'
  },
  {
    title: 'Congés',
    path: '/conge',
    icon: <RiIcons.RiOpenArmLine style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Absences',
    path: '/absence',
    icon: <BiIcons.BiWalk style={style} />,
    cName: 'nav-text'
  },
  {
    title: 'Papier administratif',
    path: '/papier',
    icon: <RiIcons.RiFilePaper2Line style={style} />,
    cName: 'nav-text'
  }
];