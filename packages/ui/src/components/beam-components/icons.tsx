import React from "react";
import BeamLogoDarkSVG from "../../assets/Beam_logo_dark.svg";
import BeamLogoLightSVG from "../../assets/Beam_logo_light.svg";
import ForbesDesktopSVG from "../../assets/Forbes_logo_desktop.svg";
import PartechDesktopSVG from "../../assets/Partech_logo_desktop.svg";
import SequoiaDesktopSVG from "../../assets/Sequoia_logo_desktop.svg";
import SurgeDesktopSVG from "../../assets/Surge_logo_desktop.svg";
import TcDesktopSVG from "../../assets/Tc_logo_desktop.svg";
import TechinasiaDesktopSVG from "../../assets/Techinasia_logo_desktop.svg";
import ForbesMobileSVG from "../../assets/Forbes_logo_mobile.svg";
import PartechMobileSVG from "../../assets/Partech_logo_mobile.svg";
import SequoiaMobileSVG from "../../assets/Sequoia_logo_mobile.svg";
import SurgeMobileSVG from "../../assets/Surge_logo_mobile.svg";
import TcMobileSVG from "../../assets/Tc_logo_mobile.svg";
import TechinasiaMobileSVG from "../../assets/Techinasia_logo_mobile.svg";


const BeamLogoDark: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <BeamLogoDarkSVG {...props} />;
};

const BeamLogoLight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <BeamLogoLightSVG {...props} />;
};

const ForbesLogo: React.FC<React.SVGProps<SVGSVGElement> & { mobile?: boolean }> = ({ mobile, ...props }) => {
  return mobile ? <ForbesMobileSVG {...props} /> : <ForbesDesktopSVG {...props} />;
};

const PartechLogo: React.FC<React.SVGProps<SVGSVGElement> & { mobile?: boolean }> = ({ mobile, ...props }) => {
  return mobile ? <PartechMobileSVG {...props} /> : <PartechDesktopSVG {...props} />;
};

const SequoiaLogo: React.FC<React.SVGProps<SVGSVGElement> & { mobile?: boolean }> = ({ mobile, ...props }) => {
  return mobile ? <SequoiaMobileSVG {...props} /> : <SequoiaDesktopSVG {...props} />;
};

const SurgeLogo: React.FC<React.SVGProps<SVGSVGElement> & { mobile?: boolean }> = ({ mobile, ...props }) => {
  return mobile ? <SurgeMobileSVG {...props} /> : <SurgeDesktopSVG {...props} />;
};

const TcLogo: React.FC<React.SVGProps<SVGSVGElement> & { mobile?: boolean }> = ({ mobile, ...props }) => {
  return mobile ? <TcMobileSVG {...props} /> : <TcDesktopSVG {...props} />;
};

const TechinasiaLogo: React.FC<React.SVGProps<SVGSVGElement> & { mobile?: boolean }> = ({ mobile, ...props }) => {
  return mobile ? <TechinasiaMobileSVG {...props} /> : <TechinasiaDesktopSVG {...props} />;
};


export {
  BeamLogoDark,
  BeamLogoLight,
  ForbesLogo,
  PartechLogo,
  SequoiaLogo,
  SurgeLogo,
  TcLogo,
  TechinasiaLogo,
};