import React from "react";
import { ButtonProps } from "../../core/models/button-props";

import "../../styles/button.scss";

/**
 * Componente de Botão customizado
 * @param props
 * @returns
 */
export function Button(props: ButtonProps) {
  return <button className="custom-button" {...props} />;
}
