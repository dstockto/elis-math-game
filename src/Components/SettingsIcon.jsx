import React from "react";
import {Link} from "react-router-dom";

export default function SettingsIcon(props) {
  let link = '/settings';
  if (props.location.pathname === '/settings') {
    link = '/';
  }

  return <div className={'settings'}>
    <Link to={link}>
      <span role={'img'} aria-label={'Settings'}>⚙️</span>
    </Link>
  </div>;
}
