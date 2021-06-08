import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';

type IconProps = {
  name: string;
  size?: string;
};

export default function Icon(props: IconProps) {
  const [size, setSize] = useState('w-6 h-6');

  useEffect(() => {
    if (props.size) {
      setSize(props.size);
    }
  }, [props.name, props.size]);

  const getSkillIcon = (icon: string) => {
    switch (icon) {
      case 'instagram':
        return <FaInstagram className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'github':
        return <FaGithub className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'linkedin':
        return <FaLinkedin className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      case 'web':
        return <IoIosGlobe className={`${size} flex-shrink-0 hover:text-gray-500`} />;

      default:
        return;
    }
  };

  return <>{getSkillIcon(props.name.toLowerCase())}</>;
}
