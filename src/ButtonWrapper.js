import React, {Suspense} from "LibApp/react";
const UIComponent_Button = React.lazy(
  () => import('UIComponent/Button')
);
const Button = ({name = '', ...others}) => (
  <Suspense fallback='Loading Button'>
    <UIComponent_Button {...others} name={`DomainWrapper Button ${name}`} />
  </Suspense>
);
export default Button;