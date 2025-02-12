import React from "react";
import BeamLogoLightSVG from "../../assets/Beam_logo_light.svg";
import ForbesDesktopSVG from "../../assets/Forbes_logo_desktop.svg";
import PartechDesktopSVG from "../../assets/Partech_logo_desktop.svg";
import SequoiaDesktopSVG from "../../assets/Sequoia_logo_desktop.svg";
import SurgeDesktopSVG from "../../assets/Surge_logo_desktop.svg";
import TcDesktopSVG from "../../assets/Tc_logo_desktop.svg";
import TechinasiaDesktopSVG from "../../assets/Techinasia_logo_desktop.svg";

const BeamLogoLight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <BeamLogoLightSVG {...props} />;
};

const ForbesDesktop: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <ForbesDesktopSVG {...props} />;
};

const PartechDesktop: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <PartechDesktopSVG {...props} />;
};

const SequoiaDesktop: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <SequoiaDesktopSVG {...props} />;
};

const SurgeDesktop: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <SurgeDesktopSVG {...props} />;
};

const TcDesktop: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <TcDesktopSVG {...props} />;
};

const TechinasiaDesktop: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <TechinasiaDesktopSVG {...props} />;
};

export {
  BeamLogoLight,
  ForbesDesktop,
  PartechDesktop,
  SequoiaDesktop,
  SurgeDesktop,
  TcDesktop,
  TechinasiaDesktop,
};