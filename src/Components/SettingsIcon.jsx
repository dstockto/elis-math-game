import React from "react";
import {Link} from "react-router-dom";

export default function SettingsIcon() {
  return <div className={'settings'}>
    <Link to={'/settings'}>
      <span role={'img'} aria-label={'Settings'}>⚙️</span>
    </Link>
  </div>
}
