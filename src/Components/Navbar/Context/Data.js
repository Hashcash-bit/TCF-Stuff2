import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import {IoMdArrowDropdown} from 'react-icons/io'
import React from "react";

const sublinks = [
  {
    page: "home",
    
    links: [
      { label: "Home", icon: <FaCreditCard />, url: "/products" },
    //   { label: "terminal", icon: <FaCreditCard />, url: "/products" },
    //   { label: "connect", icon: <FaCreditCard />, url: "/products" },
    ],
  },
  {
    page: "about us",
    links: [
      { label: "About Us", icon: <FaBook />, url: "/products" },
      // { label: "libraries", icon: <FaBook />, url: "/products" },
      // { label: "help", icon: <FaBook />, url: "/products" },
      // { label: "billing", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    page: "resources",
    links: [
      { label: "Tutoring", icon: <FaBriefcase />, url: "/products" },
      { label: "Workshops", icon: <FaBriefcase />, url: "/products" },
    ],
  },
  {
    page: "suggestion",
    links: [
      { label: "Suggestion ", icon: <FaBriefcase />, url: "/products" },
    //   { label: "about customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
  {
    page: "opportunities",
    links: [
      { label: "Join Our Team", icon: <FaBriefcase />, url: "/products" },
      { label: "Events", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;