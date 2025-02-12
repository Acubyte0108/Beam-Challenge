import React from "react";
import BeamLogo from '../../assets/icons/Beam_logo_light.svg'

const BeamLogoComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <BeamLogo {...props} />;
};

export default BeamLogoComponent;