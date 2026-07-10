import React from "react";
import { TbLoader3 } from "react-icons/tb";
function IsSubmitting() {
  return (
    <span>
      <TbLoader3 className="animate-spin size-4" />
    </span>
  );
}

export default IsSubmitting;
